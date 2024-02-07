import React from 'react'
import {
  Card,
  CardBody,
  HStack,
  Heading,
  Stack,
  Tag,
  TagLabel,
  Text,
} from '@chakra-ui/react'
import { ExternalLink } from '../links/externalLink'
import { CardContent, ILink } from '@/app/types'

interface ContentCardProps {
  content: CardContent
  variant?: string
  color?: string
}

export const ContentCard = ({
  content,
  variant,
  color,
}: ContentCardProps) => {
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
          {
             content.description.map((line: string, index: number) => (
                  <Text key={index}>{line}</Text>
                ))
            }
          }
          <HStack>
            {content.tags.map((label: string, index: number) => (
              <Tag
                key={index}
                colorScheme={color?.includes('accent') ? 'accent': 'orange'}
                borderRadius="full"
                variant="solid">
                <TagLabel>{label}</TagLabel>
              </Tag>
            ))}
          </HStack>
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
