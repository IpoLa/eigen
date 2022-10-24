import { useColor } from "palette/hooks"
import React from "react"
import { ClipPath, Defs, G } from "react-native-svg"
import { Icon, IconProps, Path } from "./Icon"

/** GuaranteeIcon */
export const GuaranteeIcon: React.FC<IconProps> = ({ title = "Guarantee", ...props }) => {
  const color = useColor()

  return (
    <Icon {...props} viewBox="0 0 24 24">
      <G clipPath="url(#clip0_2759_41684)" fillRule="evenodd" clipRule="evenodd">
        <Path
          d="M6.745 17.505a27.925 27.925 0 003.948 3.102 2.287 2.287 0 002.564 0 29.072 29.072 0 003.729-3.142 11.347 11.347 0 003.11-4.934.814.814 0 00-.611-.976.814.814 0 00-.977.602 9.826 9.826 0 01-2.678 4.168 26.87 26.87 0 01-3.517 2.947.635.635 0 01-.725 0 26.254 26.254 0 01-3.72-2.923 9.508 9.508 0 01-2.84-4.208 13.84 13.84 0 01-.18-3.143c0-.716.073-1.383.122-1.88.31 0 .692.065 1.1.081a7.97 7.97 0 002.441-.22 8.14 8.14 0 002.394-1.286c.407-.3.765-.594 1.042-.814.276.236.635.538 1.042.814A7.88 7.88 0 0015.43 6.98a.814.814 0 10.431-1.572 6.34 6.34 0 01-1.872-1.025 14.385 14.385 0 01-1.335-1.116.977.977 0 00-1.343 0c-.428.396-.876.768-1.344 1.116A6.643 6.643 0 018.08 5.417a6.325 6.325 0 01-1.954.154 15.212 15.212 0 01-1.628-.146.977.977 0 00-1.09.87c-.042.408-.147 1.474-.18 2.67-.074 1.188 0 2.38.22 3.55a11.095 11.095 0 003.297 4.99z"
          fill={color(props.fill!)}
        />
        <Path
          d="M11.89 8.893a.82.82 0 00-1.083 1.229l2.442 2.173a.969.969 0 001.351.09l5.96-5.593a.815.815 0 00-1.116-1.188l-5.438 5.128-2.116-1.84z"
          fill={color(props.fill!)}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2759_41684">
          <Path fill={color(props.fill!)} d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Icon>
  )
}
