import {useTranslation} from "react-i18next";

function CtaCard({className}: {className?: string}) {
  const { t } = useTranslation();
  return (
    <div className={"cta-card " + (className || "")}>
      <h3>{t(`cta.${className}.title`)}</h3>
      <p>{t(`cta.${className}.description`)}</p>
      <button>{t(`cta.${className}.button`)}</button>
    </div>
  )
}

export default CtaCard;