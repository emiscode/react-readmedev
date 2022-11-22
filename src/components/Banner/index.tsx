import "./Banner.css";

import { ReactNode } from "react";

interface BannerProps {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
}

function Banner({ title, subtitle, children }: BannerProps) {
  return (
    <section className="banner-container" style={{ background: "#0a192f" }}>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      {children}
    </section>
  );
}

export default Banner;
