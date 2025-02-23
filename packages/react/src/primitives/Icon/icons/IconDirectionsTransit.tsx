import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconDirectionsTransit = (props) => {
  const { className, ...rest } = props;
  return (
    <View
      as="span"
      width="1em"
      height="1em"
      className={classNames(ComponentClassNames.Icon, className)}
      {...rest}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C8 2 4 2.5 4 6V15.5C4 17.43 5.57 19 7.5 19L6 20.5V21H18V20.5L16.5 19C18.43 19 20 17.43 20 15.5V6C20 2.5 16.42 2 12 2ZM17.66 5H6.43C7.04 4.48 8.49 4 12 4C15.71 4 17.12 4.46 17.66 5ZM11 7V10H6V7H11ZM13 7H18V10H13V7ZM16.5 17H7.5C6.67 17 6 16.33 6 15.5V12H18V15.5C18 16.33 17.33 17 16.5 17Z"
          fill="currentColor"
        />
        <path
          d="M8.5 16C9.32843 16 10 15.3284 10 14.5C10 13.6716 9.32843 13 8.5 13C7.67157 13 7 13.6716 7 14.5C7 15.3284 7.67157 16 8.5 16Z"
          fill="black"
        />
        <path
          d="M15.5 16C16.3284 16 17 15.3284 17 14.5C17 13.6716 16.3284 13 15.5 13C14.6716 13 14 13.6716 14 14.5C14 15.3284 14.6716 16 15.5 16Z"
          fill="black"
        />
      </svg>
    </View>
  );
};
