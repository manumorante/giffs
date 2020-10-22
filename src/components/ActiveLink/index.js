import React from 'react'
import { Link, useRoute} from 'wouter'

export default function ActiveLink (props) {
  const [isActive, href] = useRoute(props.href);

  return (
    <Link {...props}>
      <a className={isActive ? "active" : ""} href={href}>{props.children}</a>
    </Link>
  );
};
