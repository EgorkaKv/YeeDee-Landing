import {useTranslation} from "react-i18next";

function CtaCard({className}: {className?: string}) {
  const { t } = useTranslation();
  return (
    <div className={"cta-card " + (className || "")}>
      <h3>{t(`cta.${className}.title`)}</h3>
      <p>{t(`cta.${className}.description`)}</p>
      <button
      onClick={() => {
            window.open("https://docs.google.com/forms/d/1JiImUWXw1JgqsLLKQSDHKaZwUCKDo5mX84o3hv0EswA/viewform?hl=uk&hl=uk&edit_requested=true", "_blank");
          }}
          >{t(`cta.${className}.button`)}</button>
    </div>
  )
}

export default CtaCard;