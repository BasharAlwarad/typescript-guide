import React from 'react';

interface NavProps {
  user: {
    name: string;
  };
}
const Nav = ({ user }: NavProps) => {
  // const Nav: React.FC<NavProps> = ({ user }) => {
  return <div>Nav {user.name} </div>;
};

export default Nav;
