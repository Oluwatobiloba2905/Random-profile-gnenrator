import React, { useState } from 'react';

export default function App() {
	const profiles = [
		{
			profileText: 'Stacy Bernard',
			answerOptions: [
				{ answerText: 'Facebook- None'},
				{ answerText: 'Twitter-  None'},
				{ answerText: 'Email- None '},
				{ answerText: 'Contact- (405) 457-6525', },
				{ answerText: 'State Oklahoma'},
				{ answerText: 'Next ➡' , newProfile: true },
			],
		},
		{
			profileText: 'Ralphel Broadman ',
			answerOptions: [
				{ answerText: 'Facebook- Raphel Broadman' },
				{ answerText: 'Twitter- @Ralphbroadman'},
				{ answerText: 'Email- RalphBroadman@gmail.com'},
				{ answerText: 'Contact- (905) 937-61264'},
				{ answerText: 'State- Colorado'},
				{ answerText: 'Next ➡' , newProfile: true },
			],
		},
		{
			profileText: 'John Doe ',
			answerOptions: [
				{ answerText: 'Facebook'},
				{ answerText: 'Twitter'},
				{ answerText: 'Email'},
				{ answerText: 'Contact- (905) 937-61264'},
				{ answerText: 'State - New York'},
				{ answerText: 'Next ➡', newProfile: true },
			],
		},


		{
			profileText: 'William k. Dodd',
			answerOptions: [
				{ answerText: 'Facebook- William Kenedy Doodler'},
				{ answerText: 'Twitter- wiilkdooly'},
				{ answerText: 'Email- willKdod@yahoo.com'},
				{ answerText: 'Contact- 628-82-49'},
				{ answerText: 'State -Toronto'},
				{ answerText: 'Next ➡' , newProfile: true },
			],
		},

		{
			profileText: 'Sharon F. Adams',
			answerOptions: [
				{ answerText: 'Facebook- Sharon Adams'},
				{ answerText: 'Twitter- @Shadas34' },
				{ answerText: 'Email- SharonFavAdams@hotmail.com'},
				{ answerText: 'Contact- 628-75-i2'},
				{ answerText: 'State - Texas'},
				{ answerText: 'Next ➡' , newProfile: true },
			],
		},

		{
			profileText: 'Rachel Johnson',
			answerOptions: [
				{ answerText: 'Facebook- Rachel Johnson'},
				{ answerText: 'Twitter- RachelJo89' },
				{ answerText: 'Email- RachelJohnson@email.com', },
				{ answerText: 'Contact- 628-89-59'},
				{ answerText: 'State - Indiana'  },
				{ answerText: 'Next➡' , newProfile: true },
			],
		},

		{
			profileText: 'Micheal J. Daniels',
			answerOptions: [
				{ answerText: 'Facebook- Micheal Dan'},
				{ answerText: 'Twitter- @Mikkyj67'},
				{ answerText: 'Email- MickkyjDan@digimexplus.com'},
				{ answerText: 'Contact- 622-86-54'},
				{ answerText: 'State- Minnesota'},
				{ answerText: 'Next ➡' , newProfile: true },
			],
		},
		{
			profileText: 'Marco  L. Stefano ',
			answerOptions: [
				{ answerText: 'Facebook- Luigi Stefano'},
				{ answerText: 'Twitter- @MarcoSteph'},
				{ answerText: 'Email- marcoStephanoLuigi@yahoo.com'},
				{ answerText: 'Contact- 0379 7962180'},
				{ answerText: 'State - North carolina'},
				{ answerText: 'Next ➡' , newProfile: true },
			],
		},

		{
			profileText: 'Jia Lian',
			answerOptions: [
				{ answerText: 'Facebook- Jia Lian'},
				{ answerText: 'Twitter- @JiaLIN85',  },
				{ answerText: 'Email- JiaLIN@hotmail.com'},
				{ answerText: 'Contact- 13073359315' },
				{ answerText: 'State - Maryland' },
				{ answerText: 'Next ➡' , newProfile: true },
			],
		},


		{
			profileText: 'Micheal Amenindeal ',
			answerOptions: [
				{ answerText: 'Facebook- Amenindeal Micheal'},
				{ answerText: 'Twitter- @michealAmen'},
				{ answerText: 'Email- MitchAmen@gmail.com'},
				{ answerText: 'Contact- 628-39-48' },
				{ answerText: 'State - Alaska' ,},
				{ answerText: 'Next ➡' , newProfile: true },

			],
		},
		{
			profileText: 'Brian O. Jackson',
			answerOptions: [
				{ answerText: 'Facebook- William Kenedy Doodler'},
				{ answerText: 'Twitter- @BrianJack23'},
				{ answerText: 'Email- OrlandoJack@gmail.com'},
				{ answerText: 'Contact- 628-75-45'},
				{ answerText: 'State- New Jersey'},
				{ answerText: 'Next ➡' , newProfile: true },
			],
		},

		{
			profileText: 'Luke K. Sebbastin',
			answerOptions: [
				{ answerText: 'Facebook- Luke Kingsley'},
				{ answerText: 'Twitter- @KingsleySebastin' },
				{ answerText: 'Email- KingSebastin@hotmail.com'},
				{ answerText: 'Contact- 628-82-49'},
				{ answerText: 'State - Hawail' },
				{ answerText: 'Next Profile ➡' , newProfile: true },
			],
		},

		{
			profileText: 'Hannah E. Daneils',
			answerOptions: [
				{ answerText: 'Facebook- Hannah Daniels'},
				{ answerText: 'Twitter- @EmilyDaniels84'},
				{ answerText: 'Email- DanielsEmily@yahoo.com'},
				{ answerText: 'Contact- 525-57-85'},
				{ answerText: 'State - Florida'},
				{ answerText: 'Next ➡' , newProfile: true },
			],
		},

		{
			profileText: 'Jack Prince',
			answerOptions: [
				{ answerText: 'Facebook- Prince Jack'},
				{ answerText: 'Twitter- @JackPrince'},
				{ answerText: 'Email- Jackprince99@gmail.com'},
				{ answerText: 'Contact- 628-89-95'},
				{ answerText: 'State - Texas'},
				{ answerText: 'Next ➡' , newProfile: true },
			],
		},

		{
			profileText: ' Mika Shepero',
			answerOptions: [
				{ answerText: 'Facebook- Mika Shepero' },
				{ answerText: 'Twitter- @mkiaShepero94'},
				{ answerText: 'Email- MikaShpero@email.com'},
				{ answerText: 'Contact- 628-62-45'},
				{ answerText: 'State - Chicago'},
				{ answerText: 'Next ➡' , newProfile: true },
			],
		},


		{
			profileText: 'Juliana Robert',
			answerOptions: [
				{ answerText: 'Facebook- Juliana Robert'},
				{ answerText: 'Twitter- @JulieeRObert'},
				{ answerText: 'Email- JulianaRobert@hotmail.com'},
				{ answerText: 'Contact- 628-63-59'},
				{ answerText: 'State - Ohio'},
				{ answerText: 'Next ➡' , newProfile: true },
			],
		},

		{
			profileText: 'James Justin',
			answerOptions: [
				{ answerText: 'Facebook- Justin James'},
				{ answerText: 'Twitter- @JamesJ'},
				{ answerText: 'Email- JJames@gmail.com'},
				{ answerText: 'Contact- 628-82-49'},
				{ answerText: 'State - New York'},
				{ answerText: 'Next ➡' , newProfile: true },
			],

		},

		{
			profileText: 'Liam Barry',
			answerOptions: [
				{ answerText: 'Facebook- Liam Barry'},
				{ answerText: 'Twitter- @LiamBarry02'},
				{ answerText: 'Email-   LiamBarry@gmail.com'},
				{ answerText: 'Contact- 628-55-50'},
				{ answerText: 'State - Hawail'},
				{ answerText: 'Next ➡', newProfile: true },
			],
		},

		{
			profileText: 'Alison Sarah',
			answerOptions: [
				{ answerText: 'Facebook- Alison Sarah'},
				{ answerText: 'Twitter- @AlisonSara8' },
				{ answerText: 'Email- AlisonSarah@gmail.com'},
				{ answerText: 'Contact- 628-36-44'},
				{ answerText: 'State - Arizona'},
				{ answerText: 'Next ➡' , newProfile: true },
			],
		},

		{
			profileText: 'Craig Jackson',
			answerOptions: [
				{ answerText: 'Facebook- Craig Jackson' },
				{ answerText: 'Twitter- @criagJack' },
				{ answerText: 'Email-    CraigJakson@email.com'},
				{ answerText: 'Contact- 628-82-49'},
				{ answerText: 'State - Alaska'  },
				{ answerText: 'Next ➡' , newProfile: true },
			],
		},

		

		{
			profileText: 'William k. Dodd',
			answerOptions: [
				{ answerText: 'Facebook- William Kenedy Doodler' },
				{ answerText: 'Twitter- wiilkdooly'},
				{ answerText: 'Email- willKdod@yahoo.com'},
				{ answerText: 'Contact- 628-82-49' },
				{ answerText: 'State - Toronto' },
				{ answerText: 'Next ➡' , newProfile: true },
			],
		},
	];

	const [currentprofile, setCurrentprofile] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (newProfile) => {
		if (newProfile) {
			setScore(score + 1);
		}

		const nextprofile = currentprofile + 1;
		if (nextprofile < profiles.length) {
			setCurrentprofile(nextprofile);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
				Refresh for more Profile

				</div>
			) : (
				<>
					<div className='profile-section'>
						<div className='profile-count'>
							<span>Profiles </span>
						</div>
						<div className='profile-text'>{profiles[currentprofile].profileText}</div>
					</div>
					<div className='answer-section'>
						{profiles[currentprofile].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.newProfile)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
