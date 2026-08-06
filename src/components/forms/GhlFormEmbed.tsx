import Script from "next/script";
import { ShineBorder } from "@/components/magicui/shine-border";
import { BorderBeam } from "@/components/magicui/border-beam";

/** Default Junk Command Free Estimate form in GoHighLevel */
export const DEFAULT_GHL_FORM_ID = "yw2y86G2nD6Vmzn2HjN2";

type GhlFormEmbedProps = {
  formId?: string;
  formName?: string;
  title?: string;
  className?: string;
  minHeightClassName?: string;
};

export function GhlFormEmbed({
  formId = DEFAULT_GHL_FORM_ID,
  formName = "Free Estimate",
  title = "Free Estimate",
  className = "",
  minHeightClassName = "min-h-[720px]",
}: GhlFormEmbedProps) {
  const iframeId = `inline-${formId}`;
  const formSrc = `https://api.leadconnectorhq.com/widget/form/${formId}`;

  return (
    <div
      className={`relative overflow-hidden rounded-[10px] border border-[rgba(0,135,255,0.4)] bg-[#020305] p-2 sm:p-3 ${className}`}
    >
      <ShineBorder
        shineColor={["#0787ff", "#18a0ff", "#0787ff"]}
        duration={12}
        borderWidth={1}
        className="opacity-60"
      />
      <BorderBeam
        size={100}
        duration={8}
        colorFrom="#18a0ff"
        colorTo="#0787ff"
      />
      <div
        className={`relative z-10 w-full overflow-hidden rounded-[8px] ${minHeightClassName}`}
      >
        <iframe
          src={formSrc}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "8px",
          }}
          id={iframeId}
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name={formName}
          data-height="undefined"
          data-layout-iframe-id={iframeId}
          data-form-id={formId}
          title={title}
          className={`absolute inset-0 h-full w-full ${minHeightClassName}`}
        />
      </div>
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
