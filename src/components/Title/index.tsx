import "./Title.css";

interface TitleProps {
  text: string;
}

function Title({ text }: TitleProps) {
  return <h4 className="title-section">{text}</h4>;
}

export default Title;
