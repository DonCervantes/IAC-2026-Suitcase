import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = { width: 1200, height: 630 };
export const promoSize = { width: 1080, height: 1080 };
export const ogAlt =
  "De México al IAC 2026: Elias Cervantes, Ingeniería Aeroespacial UNAM. Meta $14,999 MXN.";

async function photoSrc() {
  const file = await readFile(join(process.cwd(), "public/photo.jpg"));
  return `data:image/jpeg;base64,${file.toString("base64")}`;
}

function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 44,
          height: 44,
          borderRadius: 10,
          background: "#2c3fd1",
          color: "#fff",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 1,
        }}
      >
        EC
      </div>
      <div
        style={{
          display: "flex",
          marginLeft: 12,
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: 4,
          color: "#0b1b4a",
        }}
      >
        elias
      </div>
    </div>
  );
}

function Headline({ large }: { large?: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          fontSize: large ? 64 : 54,
          fontWeight: 800,
          lineHeight: 1.02,
          letterSpacing: -1.6,
          color: "#0b1b4a",
        }}
      >
        De México al
      </div>
      <div
        style={{
          display: "flex",
          fontSize: large ? 64 : 54,
          fontWeight: 800,
          lineHeight: 1.02,
          letterSpacing: -1.6,
          color: "#2c3fd1",
        }}
      >
        IAC 2026
      </div>
    </div>
  );
}

export async function renderOgImage() {
  const src = await photoSrc();
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "#f7f7f4",
        backgroundImage:
          "linear-gradient(to right, rgba(11,27,74,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,27,74,0.06) 1px, transparent 1px)",
        backgroundSize: "42px 42px",
        padding: "48px 56px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: 620,
        }}
      >
        <Logo />
        <div style={{ display: "flex", marginTop: 28 }}>
          <Headline />
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 22,
            lineHeight: 1.35,
            color: "#5c6478",
            maxWidth: 560,
          }}
        >
          Ayúdame a llegar al IAC.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 42,
            fontWeight: 800,
            color: "#0b1b4a",
          }}
        >
          $14,999 MXN
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 8,
            fontSize: 16,
            fontWeight: 700,
            letterSpacing: 1.6,
            color: "#2c3fd1",
          }}
        >
          SPEI · SOLANA · STELLAR · GOFUNDME
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            width: 360,
            height: 480,
            overflow: "hidden",
            borderRadius: 28,
            border: "1px solid #dfe3ee",
            background: "#ffffff",
          }}
        >
          <img src={src} alt="" width={360} height={480} style={{ objectFit: "cover", objectPosition: "center 18%" }} />
        </div>
      </div>
    </div>,
    { ...ogSize },
  );
}

export async function renderPromoImage() {
  const src = await photoSrc();
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        background: "#f7f7f4",
        backgroundImage:
          "linear-gradient(to right, rgba(11,27,74,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,27,74,0.06) 1px, transparent 1px)",
        backgroundSize: "42px 42px",
        padding: 56,
      }}
    >
      <Logo />
      <div style={{ display: "flex", marginTop: 28 }}>
        <Headline large />
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 12,
        }}
      >
        <div
          style={{
            display: "flex",
            width: 420,
            height: 520,
            overflow: "hidden",
            borderRadius: 28,
            border: "1px solid #dfe3ee",
            background: "#ffffff",
          }}
        >
          <img src={src} alt="" width={420} height={520} style={{ objectFit: "cover", objectPosition: "center 18%" }} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 20,
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: 1.4,
          color: "#2c3fd1",
        }}
      >
        META $14,999 MXN · IAC 2026 ANTALYA
      </div>
    </div>,
    { ...promoSize },
  );
}
