import { MouseEventHandler, ReactNode, useEffect, useRef } from 'react'
import Lottie from 'lottie-react'

// Style
import { Button as ButtonComponent, ButtonLabel, IconContainer } from './style'

// Assets
import animationData from '../../public/assets/lottie/loader.json'

interface Props {
  title: string
  onClick: MouseEventHandler<any> | undefined
  disabled?: boolean
  icon?: ReactNode
  loading?: number
}

const Button = ({ title, onClick, disabled, icon, loading }: Props) => {
  const lottieRef = useRef<any>(null)

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        lottieRef.current?.pause()
      }, 400)
    } else {
      lottieRef.current?.play()
    }
  }, [loading])

  return (
    <ButtonComponent
      onClick={onClick}
      disabled={disabled ? true : false}
      loading={loading ? 1 : 0}
    >
      <ButtonLabel>{title}</ButtonLabel>
      {icon !== undefined && (
        <IconContainer loading={loading ? 1 : 0}>{icon}</IconContainer>
      )}

      {loading ? (
        <IconContainer>
          <Lottie
            lottieRef={lottieRef}
            animationData={animationData}
            loop
            autoPlay
            style={{ height: 48, width: 48 }}
          />
        </IconContainer>
      ) : null}
    </ButtonComponent>
  )
}

export default Button
