import React from 'react'
import {
  Card,
  CardBody,
  HStack,
  Heading,
  Stack,
  Tag,
  TagLabel,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { marked } from 'marked'

import { ExternalLink } from '../links/externalLink'
import { CardContent  } from '@/app/types'
import { MarkdownText } from '../text/markdownText'

interface ContentCardProps {
  content: CardContent
  variant?: string
  color?: string
}

export const ContentCard = ({ content, variant, color }: ContentCardProps) => {
  return (
    <Card
      variant={variant}
      overflow="hidden"
      bgColor={variant === 'outline' ? '' : 'foreground'}
      borderColor={variant === 'outline' ? 'secondary.300' : ''}
      color="whitesmoke">
      <CardBody>
        <Stack gap="1em">
          <Heading size="md" color={`${color || 'primary.500'}`}>
            {content.title}
          </Heading>
          <Heading size="sm">{content.subtitle}</Heading>
          <MarkdownText>
            {content.description}
          </MarkdownText>
          <Wrap>
            {content.tags.map((label: string, index: number) => (
              <WrapItem key={index}>
                <Tag
                  colorScheme={color?.includes('accent') ? 'accent' : 'orange'}
                  borderRadius="full"
                  variant="solid">
                  <TagLabel>{label}</TagLabel>
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
          <HStack>
            {content.links?.map((link, index) => (
              <ExternalLink title={link.title} href={link.href} key={index} />
            ))}
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  )
}
