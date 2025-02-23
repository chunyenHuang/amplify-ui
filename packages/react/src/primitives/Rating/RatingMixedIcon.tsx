import classNames from 'classnames';
import { View } from '../View';
import { Property } from 'csstype';

interface RatingMixedIconProps {
  emptyColor: Property.Color;
  emptyIcon: JSX.Element;
  fillColor: Property.Color;
  fillIcon: JSX.Element;
  value: number;
}

export const RatingMixedIcon: React.FC<RatingMixedIconProps> = ({
  emptyColor,
  emptyIcon,
  fillColor,
  fillIcon,
  value,
}) => {
  const widthPercentage = `${(value % 1) * 100}%`;
  return (
    <View as="span" className={classNames(`amplify-rating-icon-container`)}>
      <View as="label" className={classNames(`amplify-rating-label`)}>
        <View
          as="span"
          className={classNames(
            `amplify-rating-icon`,
            `amplify-rating-icon-empty`
          )}
          color={emptyColor}
        >
          {emptyIcon}
        </View>
      </View>
      <View
        as="label"
        className={classNames(`amplify-rating-label`)}
        width={widthPercentage}
      >
        <View
          as="span"
          className={classNames(
            `amplify-rating-icon`,
            `amplify-rating-icon-filled`
          )}
          color={fillColor}
        >
          {fillIcon}
        </View>
      </View>
    </View>
  );
};

RatingMixedIcon.displayName = 'RatingMixedIcon';
