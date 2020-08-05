import React, { useMemo } from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import * as S from './styles'

import { PricingBoxProps } from 'types/api'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = ({
  totalPrice,
  numberInstallments,
  priceInstallment,
  benefits,
  button
}: PricingBoxProps) => {
  const priceDiscount = useMemo(() => numberInstallments * priceInstallment, [
    numberInstallments,
    priceInstallment
  ])

  return (
    <S.Box>
      <S.Prices>
        <S.FullPrice>
          De <span>R${totalPrice}</span> por apenas
        </S.FullPrice>
        <S.DiscountPrice>
          <span>{numberInstallments}x de</span> R${priceInstallment}
        </S.DiscountPrice>
      </S.Prices>
      <S.BenefitsList dangerouslySetInnerHTML={{ __html: benefits }} />

      <Button href={button.url} onClick={onClick} withPrice>
        <p>{button.label}</p>
        <div>
          <S.ButtonFullPrice>R${totalPrice}</S.ButtonFullPrice>
          <S.ButtonDiscountPrice>R${priceDiscount}</S.ButtonDiscountPrice>
        </div>
      </Button>
    </S.Box>
  )
}

export default PricingBox
