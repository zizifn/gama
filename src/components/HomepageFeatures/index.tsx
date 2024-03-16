import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Step 1",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod
        deserunt eius officiis. Id sequi dolor voluptatem, asperiores
        necessitatibus consequuntur.
      </>
    ),
  },
  {
    title: "Step 2",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <> Commuity!!!!!!! </>,
  },
  {
    title: "Step 3",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae modi
        sequi explicabo magnam architecto illo impedit soluta aperiam? Quos
        aperiam temporibus modi doloremque adipisci eveniet laudantium nemo iste
        voluptate illo.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
