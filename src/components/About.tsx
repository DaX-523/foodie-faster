// Class based component

import { Component, ReactNode } from 'react';
import { MyProps, MyState } from '../common/propsandstate';
import GitHubIcon from '@mui/icons-material/GitHub';
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
      <div className="flex items-center flex-col gap-3 shadow-sm shadow-slate-800 w-1/4 m-auto my-6 rounded-xl bg-slate-100">
        <h1 className="text-2xl">Team</h1>
        <h2 className="text-xl font-semibold">{name}</h2>
        <img className="w-10 rounded-full" src={avatar_url} alt="avatar" />
        <h3>{location}</h3>
        <h4 className="mb-1 p-2">
          <a href={html_url}>
            <GitHubIcon />
          </a>
        </h4>
      </div>
    );
  }
}

export default About;
