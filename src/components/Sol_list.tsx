"use client";
import styles from "./sol_list.module.scss";
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";

interface Ques {
	question: string;
	answer: string;
}

interface FAQProps {
	children: React.ReactNode;
	ques: Ques[];
}

interface AccordionElement {
	children: React.ReactNode;
}

function AccordionTrigger({ children, ...props }: AccordionElement) {
	return (
		<Accordion.Header className={styles.accordion_header}>
			<Accordion.Trigger className={styles.accordion_trigger} {...props}>
				<p>{children}</p>
				<div>
					<span></span>
					<span></span>
				</div>
			</Accordion.Trigger>
		</Accordion.Header>
	);
}

function AccordionContent({ children, ...props }: AccordionElement) {
	return (
		<Accordion.Content {...props} className={styles.accordion_content}>
			{children}
		</Accordion.Content>
	);
}

export default function FAQ({ children, ques }: FAQProps) {
	let len = ques.length;

	const accordionItems = ques.map((item, index) => {
		if (index >= len / 2) return;
		return (
			<Accordion.Item
				className={styles.accordion_item}
				value={item.question}
				key={item.question}
			>
				<AccordionTrigger>{item.question}</AccordionTrigger>

				<AccordionContent>{item.answer}</AccordionContent>
			</Accordion.Item>
		);
	});

	const accordionItems1 = ques.map((item, index) => {
		if (index < len / 2) return;
		return (
			<Accordion.Item
				className={styles.accordion_item}
				value={item.question}
				key={item.question}
			>
				<AccordionTrigger>{item.question}</AccordionTrigger>

				<AccordionContent>{item.answer}</AccordionContent>
			</Accordion.Item>
		);
	});

	return (
		<div className={styles.faq}>
			<h3 className={styles.faq_heading}>{children}</h3>

			<div className={styles.faq_accordion}>
				<Accordion.Root
					className={styles.accordion_root}
					type="single"
					collapsible
				>
					<div>{accordionItems}</div>
					<div>{accordionItems1}</div>
				</Accordion.Root>
			</div>
		</div>
	);
}
