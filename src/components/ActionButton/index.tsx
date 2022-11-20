import "./ActionButton.css";

interface ActionButtonProps {
  imgSrc: string;
  altSrc: string;
  text?: string;
  onClick?: () => void;
}

const ActionButton = ({ imgSrc, text, altSrc, onClick }: ActionButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className="btn-nav" onClick={handleClick}>
      <img src={imgSrc} alt={altSrc} />
      {text}
    </button>
  );
};

export default ActionButton;
