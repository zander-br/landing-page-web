import React, { useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

import * as S from './styles'

import { Review } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const ReviewCard: React.FC<Review> = ({ id, name, photo, text }) => {
  useEffect(() => {
    const texts = document.querySelectorAll('p.description')

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        entry.target.classList[
          entry.target.scrollHeight > entry.contentRect.height + 25
            ? 'add'
            : 'remove'
        ]('truncated')
      }
    })

    texts.forEach((text) => observer.observe(text))
  })

  return (
    <S.Card>
      <S.User>
        <S.Image>
          <img
            src={
              photo
                ? getImageUrl(photo.url)
                : require('@images/reviews/reviewer.jpg')
            }
            loading="lazy"
            alt={name}
          />
        </S.Image>
        <S.Name>{name}</S.Name>
      </S.User>
      <S.Text>
        <input type="checkbox" id={`review-${id}`} />
        <p className="description">{text}</p>
        <label className="label-more" htmlFor={`review-${id}`}>
          Ver tudo
        </label>
      </S.Text>
    </S.Card>
  )
}

export default ReviewCard
