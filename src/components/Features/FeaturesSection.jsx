import { SectionWrapper, Content } from "./FeaturesSection.styled";
import { FeatureItem } from "./FeatureItem";
import {
  CodeBracketIcon,
  CubeIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

export const FeaturesSection = () => {
  return (
    <SectionWrapper>
      <Content>
        <FeatureItem
          icon={<CodeBracketIcon className="h-8 w-8" />}
          title="Full front-end ownership"
          subtitle="From concept to code, I handle every stage of building complex wawrehouse management front-ends."
        />
        <FeatureItem
          icon={<CubeIcon className="h-8 w-8" />}
          title="Real warehouse systems"
          subtitle="My work connects every part of product lifecycle, from assembly to customer delivery."
        />
        <FeatureItem
          icon={<UsersIcon className="h-8 w-8" />}
          title="International collaboration"
          subtitle="Experienced in working with English-speaking teams and clients on planning and delivering projects."
        />
      </Content>
    </SectionWrapper>
  );
};
