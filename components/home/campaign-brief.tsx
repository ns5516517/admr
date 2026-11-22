"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, FieldGroup, FieldLegend, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

const industries = [
	{ value: "real-estate", label: "Real Estate & Infrastructure" },
	{ value: "retail", label: "Retail & FMCG" },
	{ value: "corporate", label: "Corporate Enterprises" },
	{ value: "healthcare", label: "Healthcare & Pharma" },
	{ value: "education", label: "Higher Education" },
	{ value: "hospitality", label: "Hospitality & Luxury" },
	{ value: "other", label: "Other" },
];

const verticals = [
	{ value: "media-buying", label: "Media Buying" },
	{ value: "releasing-agency", label: "Releasing Agency" },
	{ value: "digital-marketing", label: "Digital Marketing" },
	{ value: "media-pr", label: "Media PR" },
];

const labelClassName = "text-xs font-bold tracking-wide uppercase";
const controlClassName = "w-full min-w-0 rounded-lg border-border bg-muted/50";

export default function CampaignBrief() {
	return (
		<Card className="@container/brief min-w-0 rounded-2xl border border-border p-4 shadow-sm sm:p-6 xl:p-8">
			<form aria-label="Campaign brief" noValidate onSubmit={(event) => event.preventDefault()}>
				<FieldGroup className="gap-5">
					<div className="grid min-w-0 gap-4 @min-[25rem]/brief:grid-cols-2">
						<Field className="min-w-0 gap-2">
							<Label htmlFor="campaign-name" className={labelClassName}>Executive name *</Label>
							<Input id="campaign-name" autoComplete="name" placeholder="e.g. Marcus Vance" required className={controlClassName} />
						</Field>
						<Field className="min-w-0 gap-2">
							<Label htmlFor="campaign-email" className={labelClassName}>Corporate email *</Label>
							<Input id="campaign-email" type="email" autoComplete="email" placeholder="e.g. m.vance@enterprise.com" required className={controlClassName} />
						</Field>
						<Field className="min-w-0 gap-2">
							<Label htmlFor="campaign-organization" className={labelClassName}>Company / organization *</Label>
							<Input id="campaign-organization" autoComplete="organization" placeholder="e.g. Horizon Global Holdings" required className={controlClassName} />
						</Field>
						<Field className="min-w-0 gap-2">
							<Label id="campaign-industry-label" htmlFor="campaign-industry" className={labelClassName}>Industry sector</Label>
							<Select items={industries}>
								<SelectTrigger id="campaign-industry" aria-labelledby="campaign-industry-label" className={controlClassName}>
									<SelectValue placeholder="Select an industry" />
								</SelectTrigger>
								<SelectContent alignItemWithTrigger={false} align="start">
									{industries.map(({ value, label }) => (
										<SelectItem key={value} value={value}>{label}</SelectItem>
									))}
								</SelectContent>
							</Select>
						</Field>
					</div>

					<FieldSet className="min-w-0">
						<FieldLegend id="campaign-vertical-label" className="mb-2 text-xs font-bold tracking-wide uppercase data-[variant=legend]:text-xs">
							Primary media vertical
						</FieldLegend>
						<RadioGroup aria-labelledby="campaign-vertical-label" className="grid-cols-2 gap-2 @min-[29rem]/brief:grid-cols-4">
							{verticals.map(({ value, label }) => (
								<Label key={value} className="flex min-w-0 cursor-pointer items-center gap-2 rounded-lg border border-border bg-muted/50 px-2.5 py-2 text-xs leading-snug has-data-checked:border-primary has-data-checked:bg-primary/10 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring">
									<RadioGroupItem value={value} className="border-border bg-background after:hidden" />
									<span>{label}</span>
								</Label>
							))}
						</RadioGroup>
					</FieldSet>

					<Field className="min-w-0 gap-2">
						<Label htmlFor="campaign-scope" className={labelClassName}>Campaign scope / strategic objectives</Label>
						<Textarea id="campaign-scope" placeholder="Provide targets, flight dates, regional priorities, or current media challenges…" className={`${controlClassName} min-h-24 resize-y`} />
					</Field>

					<Button type="button" variant="secondary" disabled size="xl" className="w-full rounded-lg whitespace-normal font-bold disabled:opacity-75">
						Transmit Strategic Brief
						<Send aria-hidden="true" data-icon="inline-end" />
					</Button>
				</FieldGroup>
			</form>
		</Card>
	);
}
