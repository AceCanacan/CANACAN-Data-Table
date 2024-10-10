// App.jsx

import { useState } from "react";
import "./App.css";
import FilterStudentTable from "./components/FilterStudentTable";
import StudentTable from "./components/StudentTable";
import SearchBar from "./components/SearchBar";
import { Container, Card } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';


const dataList = [
	{ id: 1, lastName: "SquarePants", firstName: "SpongeBob", course: "IS", birthdate: "1999-07-14" },
	{ id: 2, lastName: "Star", firstName: "Patrick", course: "CS", birthdate: "1998-06-17" },
	{ id: 3, lastName: "Tentacles", firstName: "Squidward", course: "IS", birthdate: "1997-10-09" },
	{ id: 4, lastName: "Cheeks", firstName: "Sandy", course: "DS", birthdate: "2000-11-23" },
	{ id: 5, lastName: "Krabs", firstName: "Eugene", course: "IT", birthdate: "1960-09-25" },
	{ id: 6, lastName: "Plankton", firstName: "Sheldon", course: "CS", birthdate: "1960-11-30" },
	{ id: 7, lastName: "Puff", firstName: "Mrs.", course: "IS", birthdate: "1958-05-12" },
	{ id: 8, lastName: "SquarePants", firstName: "Gary", course: "DS", birthdate: "2001-04-22" },
  ];
  

const headers = ["Students"];

function App() {
  const [data, setData] = useState(dataList);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [course, setCourse] = useState("");
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <Container className="mt-4">
      <Card className="p-4 shadow-sm" style={{ backgroundColor: "#ffffff" }}>
        <FilterStudentTable>
          <SearchBar
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            course={course}
            setCourse={setCourse}
            minAge={minAge}
            setMinAge={setMinAge}
            maxAge={maxAge}
            setMaxAge={setMaxAge}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
          <StudentTable
            headers={headers}
            data={data}
            firstName={firstName}
            lastName={lastName}
            course={course}
            minAge={minAge}
            maxAge={maxAge}
            startDate={startDate}
            endDate={endDate}
          />
        </FilterStudentTable>
      </Card>
    </Container>
  );
}

export default App;
