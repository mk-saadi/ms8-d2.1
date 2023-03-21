import "./App.css";

const string = { name: "BlueDot Tech", age: 22, email: "bluedot@support.com" };

const stringStyle = {
	fontSize: "3.5rem",
	color: "#3fd5ff",
	backgroundColor: "#fff",
	borderRadius: "5px",
	padding: "10px",
	fontWeight: "bold",
	fontFamily: "'Share Tech Mono', monospace",
	// fontFamily: "fira code",
};
const personStyle = {
	// fontSize: "larger",
	color: "salmon",
	backgroundColor: "#fff",
	padding: "10px",
	cursor: "text",
	// userSelect: "none",
	fontFamily: "jetBrains mono",
	boxShadow: "5px 5px #3b3b3b",
};
const personBorder = {
	backgroundColor: "#c7c7c772",
	border: "2px solid salmon",
	margin: "10px",
	padding: "0px 10px",
};

const members = [
	{ name: "Humaira_Misti", profs: "Sales_Manager" },
	{ name: "Urboshi_Misra", profs: "Biology_Teacher" },
	{ name: "Iti_Khondokar", profs: "HouseWife" },
	{ name: "Sumaiya_Israt", profs: "Principal" },
];
function App() {
	const names = [
		"MK_Saadi",
		"Aria_Angeles",
		"Emi_Jahanara",
		"Eva_Afnan",
		"Mira_Jahan_Mou",
		"Hena_Chowdhury",
	];
	const profs = [
		"Web_Developer",
		"Fashion_Designer",
		"IT_Professor",
		"Surgeon",
		"HouseWife",
		"Public_Service",
	];
	return (
		<div className="App">
			<header className="App-header">
				<div className="number">
					<p style={stringStyle}>{string.name}</p>
					<p style={stringStyle}>Email: {string.email}</p>
				</div>
			</header>
			<div className="personnel">
				{names.map((name, index) => (
					/* ------------- be careful "Person" should be in capital letter ------------ */
					<Person
						key={index}
						name={name}
						prof={profs[index]}
					/>
				))}
				<h1>Members</h1>
				{members.map((member, index) => (
					<Person
						key={index}
						name={member.name}
						prof={member.profs}
					/>
				))}
				{/* ------------------------------ same as above ----------------------------- */}
				{/* {members.map((member, prof) => (
					<Person
						name={member.name}
						prof={prof.profs}
					></Person>
				))} */}
			</div>
			<footer>
				<h2 style={personStyle}>For More Info Go To Module 47-5</h2>
			</footer>
		</div>
	);
}

// >> a function is a HTML tag
function Person(props) {
	// console.log(props);
	return (
		<div style={personBorder}>
			<h1
				style={personStyle}
				className="person"
			>
				{props.name}
			</h1>
			<p
				style={personStyle}
				className="person"
			>
				{props.prof}
			</p>
		</div>
	);
}

//# --------------------------------- old way -------------------------------- */
// {names.map((name) => (
// 	<ul>
// 		<li>{name}</li>
// 	</ul>
// ))}
{
	/* {profs.map((prof) => (
		<Person prof={prof}></Person>
		))} */
}

//# --------------------------------- old way -------------------------------- */
/* <Person
		name={names[0]}
		prof={profs[0]}
		></Person>
		<Person
		name={names[1]}
		prof={profs[1]}
		></Person>
		<Person
		name={names[2]}
		prof={profs[2]}
		></Person>
		<Person
		name={names[3]}
		prof={profs[3]}
		></Person> */

//# --------------------------------- old one -------------------------------- */
// return (
// 	<div className="App">
// 		<header className="App-header">
// 			<div className="number">
// 				<p style={stringStyle}>{string.name}</p>
// 				<p style={stringStyle}>Email: {string.email}</p>
// 			</div>
// 		</header>
// 		<div className="personnel">
// 			{(names, profession).map((name, prof) => (
// 				<Person
// 					prof={prof}
// 					name={name}
// 				></Person>
// 			))}
// 		</div>
// 		<footer>
// 			<h2 style={personStyle}>For More Info Go To Module 47-5</h2>
// 		</footer>
// 	</div>
// );
export default App;
