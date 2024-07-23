import { PropTypes } from "prop-types";
import { AfdIcon } from "./AfdIcon";
import cn from "classnames";

export const AfdAvatar = (props) => {
  const {
    icon,
    iconType,
    userInitials,
    companyInitials,
    circle,
    link,
    size,
    image,
    avatarClass,
  } = props;
  const avatarClassList = cn({
    "slds-avatar": true,
    "slds-avatar_circle": circle,
    "slds-avatar_large": size === "large",
    "slds-avatar_x-small": size === "x-small",
    "slds-avatar_small": size === "small",
    "slds-avatar_medium": size === "medium",
    [avatarClass]: true,
  });
  const avatarContent = (
    <>
      {icon && <AfdIcon icon={icon} type={iconType} />}
      {userInitials && (
        <abbr
          className="slds-avatar__initials slds-icon-standard-user"
          title="person name"
        >
          {userInitials}
        </abbr>
      )}
      {companyInitials && (
        <abbr
          className="slds-avatar__initials slds-icon-standard-account"
          title="Company name"
        >
          {companyInitials}
        </abbr>
      )}
      {image && <img alt="avatar image" src={image} title="Avatar" />}
      {avatarClass && <span className="slds-assistive-text">Avatar</span>}
    </>
  );
  return (
    <>
      {link ? (
        <a href={link}>
          <span className={avatarClassList}>{avatarContent}</span>
        </a>
      ) : (
        <span className={avatarClassList}>{avatarContent}</span>
      )}
    </>
  );
};

AfdAvatar.propTypes = {
  icon: PropTypes.string,
  iconType: PropTypes.string,
  userInitials: PropTypes.string,
  companyInitials: PropTypes.string,
  circle: PropTypes.bool,
  link: PropTypes.string,
  size: PropTypes.string,
  image: PropTypes.string,
  avatarClass: PropTypes.string,
};
