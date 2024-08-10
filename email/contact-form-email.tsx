import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/components";

type ContactFormEmailProps = { message: string; senderEmail: string };

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head>
        <Preview>Neue Nachricht von Portfolio Me</Preview>
        <Tailwind>
          <Body>
            <Container>
              <Section>
                <Heading>
                  Du hast folgende Nachricht vom Kontakt-Formular erhalten:
                </Heading>
                <Text>{message}</Text>
                <Hr></Hr>
                <Text>Der Email-Absender ist: {senderEmail}</Text>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Head>
    </Html>
  );
}
