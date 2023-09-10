// Class based component

import { Component, ReactNode } from 'react';
import { MyProps, MyState } from '../common/propsandstate';
import { USER_URL } from '../utils/urls.ts';

class About extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);

    this.state = {
      userData: {
        name: 'Dummy name',
        location: 'Dummy location'
      }
    };
  }

  async componentDidMount(): Promise<void> {
    const user = await fetch(USER_URL);
    const json = await user.json();

    this.setState({
      userData: json
    });
  }

  render(): ReactNode {
    const { name, location, avatar_url, html_url } = this.state.userData;
    return (
      <div className="flex items-center flex-col gap-3">
        <h1 className="text-2xl">Team</h1>
        <h2 className="text-xl font-semibold">{name}</h2>
        <img className="w-6 rounded-full" src={avatar_url} alt="avatar" />
        <h3>{location}</h3>
        <h4>
          <a href={html_url}>GitHub Link</a>
        </h4>
      </div>
    );
  }
}

export default About;
