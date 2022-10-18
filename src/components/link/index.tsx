import "./link.css";

interface LinkPropTypes {
  children: any;
  href: string;
  target?: string;
  rel?: string;
  dataQa?: any;
}

const Link = ({
  children,
  href = "",
  target = "",
  rel = "",
  dataQa = "",
}: LinkPropTypes): JSX.Element => {
  return (
    <a
      className="App-link"
      href={href}
      target={target}
      rel={rel}
      data-testid={dataQa}
    >
      {children}
    </a>
  );
};

export default Link;
