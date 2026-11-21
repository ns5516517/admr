import Image, { StaticImageData } from "next/image";

const SectionImg = ({ src }: { src: StaticImageData }) => {
	return (
		<div className="relative rounded-t-xl overflow-hidden aspect-video max-h-97.5">
			<Image src={src} title="" alt="" fill sizes="100vw" loading="eager" />
		</div>
	);
};

export default SectionImg;
