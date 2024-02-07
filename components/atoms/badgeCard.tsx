import { Card, CardBody, Tooltip } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

interface BadgeCardProps {
  img: string
  title: string
  variant?: 'elevated' | 'outline' | 'filled'
}
export const BadgeCard = ({ img, title, variant }: BadgeCardProps) => (
  <Tooltip label={title.toUpperCase()}>
    <Image src={img} alt={title} width="60" height="60" />
  </Tooltip>
)
