import { ImageResponse } from "next/og";
import Logo from "@/components/shared/logo";

export const alt = "ADMR Technologies — Media, Advertising & Performance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
	return new ImageResponse(
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "flex-start",
				width: "100%",
				height: "100%",
				padding: "70px 85px",
				backgroundColor: "#101a23",
				backgroundImage: "linear-gradient(115deg, #101a23 35%, #004c60 100%)",
				color: "white",
			}}
		>
			<Logo width={198} height={62} />
			<div style={{ display: "flex", flexDirection: "column", marginTop: 41, fontSize: 78, fontWeight: 700, lineHeight: 1.08 }}>
				<span>Media, Advertising</span>
				<span style={{ color: "#EE7923" }}>&amp; Performance</span>
			</div>
			<div style={{ marginTop: 30, fontSize: 25, color: "#e7ecf0" }}>
				Media buying · Advertising releases · Digital marketing · Public relations
			</div>
		</div>,
		size,
	);
}
