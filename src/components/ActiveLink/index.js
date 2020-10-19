import React from 'react'
import { Link, useRoute} from 'wouter'

export default function ActiveLink (props) {
  const [isActive] = useRoute(props.href);

  return (
    <Link {...props}>
      <a className={isActive ? "active" : ""}>{props.children}</a>
    </Link>
  );
};
