import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

export function CheckAvailability({
  endpoint,
}: {
  endpoint: string;
}): JSX.Element {
  const [checkStatus, setCheckStatus] = useState("Check");

  async function checkAPIAvailability() {
    console.log("checkAPIAvailability");
    setCheckStatus("Checking...");
    const apikey = window.localStorage.getItem("apiKey");
    if (!apikey) {
      alert("Please save your API Key first");
      return;
    }

    try {
      const resp = await fetch(`${endpoint}/v1/chat/completions`, {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apikey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: "Hello!",
            },
          ],
        }),
      });
      if (resp.ok) {
        setCheckStatus("Checked");
        const json = await resp.json();
        alert(JSON.stringify(json));
      } else {
        setCheckStatus("Check");
        alert(`${endpoint} return ${resp.status} ${resp.statusText}))`);
      }
    } catch (err) {
      setCheckStatus("Check failed");
      console.error(err);
      alert(JSON.stringify(err.message));
    }
  }
  return (
    <>
      <button
        onClick={() => checkAPIAvailability()}
        type="button"
        className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {checkStatus === "Checked" ? (
          <>
            {"Checked"}
            <CheckCircleIcon
              className="-mr-0.5 h-5 w-5 text-green-400"
              aria-hidden="true"
            />
          </>
        ) : (
          checkStatus
        )}
      </button>
    </>
  );
}

export function SaveAPIKey(): JSX.Element {
  const [isSaving, updateSaving] = useState(false);
  const [apikey, setApiKey] = useState("");

  function saveApiKey2LocalStorage(apiKey: string) {
    console.log(apikey);
    window.localStorage.setItem("apiKey", apiKey);
    updateSaving(true);
  }

  useEffect(() => {
    const apikey = window.localStorage.getItem("apiKey");
    console.log("useEffect running", apikey);
    if (apikey) {
      setApiKey(apikey);
    }
  }, []);

  return (
    <>
      <div className="relative flex">
        <label
          htmlFor="name"
          className=" absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
        >
          API Key
        </label>
        <input
          onChange={(e) => {
            setApiKey(e.target.value);
            updateSaving(false);
          }}
          value={apikey}
          type="text"
          name="name"
          id="name"
          className="basis-1/2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="SK-...."
        />
        <button
          onClick={() => saveApiKey2LocalStorage(apikey)}
          type="button"
          className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3  text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
          {isSaving ? (
            <CheckCircleIcon
              className="-mr-0.5 h-5 w-5 text-green-400"
              aria-hidden="true"
            />
          ) : null}
        </button>
      </div>
    </>
  );
}
