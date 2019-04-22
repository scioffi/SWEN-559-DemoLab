import React from "react";
import { shallow, mount } from "enzyme";
import Scoreboard from './Scoreboard';

describe("Scoreboard Component", () => {
	it('Should Add 1 run to away team when clicked', () => {
		const teams = ["Mets", "Phillies"];
		const wrapper = mount(<Scoreboard teams={teams} />);

		wrapper.find("#buttonAway").simulate('click');

		expect(wrapper.find("#scoreAway").text()).toEqual("1");
	});
});
