//
import style from "./PageContent.module.css";

export default function PageContent({ title, children }) {
  return (
    <div className={style.content}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}
