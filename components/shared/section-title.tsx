import React, { ComponentProps } from "react";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { cn } from "cn";

type SectionHeaderProps = {
	className?: string;
	title: {
		label: string;
		div?: ComponentProps<"div">;
	};
	description?: {
		label: string;
		p?: ComponentProps<"p">;
	};
	button?: ComponentProps<typeof Button>;
};

const SectionHeader = ({
	title,
	button,
	className,
	description,
}: SectionHeaderProps) => {
	const { className: titleClass, ...titleProps } = title.div ?? {};
	const { className: descClass, ...descriptionProps } = description?.p ?? {};
	const {
		variant = 'link',
		size = 'default',
		className: buttonClass,
		...buttonProps
	} = button ?? {};
	return (
		<>
			<div className={cn("flex gap-3 justify-between flex-wrap", className)}>
				<div className="flex flex-col">
					<div
						className={cn(
							"font-normal text-foreground 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl",
							titleClass,
						)}
						{...titleProps}
					>
						{title.label}
					</div>
					<p
						className={cn(
							"md:text-base text-sm font-normal text-accent-foreground max-w-175",
							descClass,
						)}
						{...descriptionProps}
					>
						Strategic media planning and buying to ensure maximum brand
						visibility, audience reach, and cost-effective advertising across
						dominant domestic and multinational channels.
					</p>
				</div>
				<Button
					className={cn(
						"xl:text-2xl md:text-xl text-lg font-bold",
						buttonClass,
					)}
					variant={variant}
					size={size}
					{...buttonProps}
				>
					Scale Performance
					<ArrowUpRight />
				</Button>
			</div>
		</>
	);
};

export default SectionHeader;
