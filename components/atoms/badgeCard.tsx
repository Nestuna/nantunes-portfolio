import { Card, CardBody, Tooltip } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export const BadgeCard = ({ img, title }: Record<any, string>) => (
    <Tooltip label={title.toUpperCase()}>
      <Card bgColor="foreground" borderRadius='30px'>
        <CardBody>
          <Image src={img} alt={title} width="50" height="50" />
        </CardBody>
      </Card>
    </Tooltip>
  )
