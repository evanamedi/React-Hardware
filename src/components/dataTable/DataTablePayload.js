import React from "react";
import LiveEditorComponent from "../liveEditor/LiveEditorComponent";

const DataTablePayload = () => {
	const initialCode = `
const SampleData = [
	{ id: 1, name: "Alice", age: 25 },
	{ id: 2, name: "Bob", age: 30 },
	{ id: 3, name: "Charlie", age: 35 },
	{ id: 4, name: "David", age: 40 },
	{ id: 5, name: "Edward", age: 45 },
	{ id: 6, name: "Frank", age: 50 },
	{ id: 7, name: "George", age: 55 },
];

const DataTable = ({ data = SampleData, rowsPerPage = 3 }) => {
	const [filterText, setFilterText] = useState("");
	const [sortConfig, setSortConfig] = useState({
		key: "",
		direction: "",
	});
	const [currentPage, setCurrentPage] = useState(1);

	const handleFilterChange = (e) => {
		setFilterText(e.target.value);
		setCurrentPage(1);
	};

	const handleSort = (key) => {
		let direction = "ascending";
		if (
			sortConfig.key === key &&
			sortConfig.direction === "ascending"
		) {
			direction = "descending";
		}
		setSortConfig({ key, direction });
	};

	const filteredData = data.filter((item) =>
		Object.values(item)
			.join("")
			.toLowerCase()
			.includes(filterText.toLowerCase())
	);

	const sortedData = [...filteredData].sort((a, b) => {
		if (a[sortConfig.key] < b[sortConfig.key]) {
			return sortConfig.direction === "ascending" ? -1 : 1;
		}
		if (a[sortConfig.key] > b[sortConfig.key]) {
			return sortConfig.direction === "ascending" ? 1 : -1;
		}
		return 0;
	});

	const startIndex = (currentPage - 1) * rowsPerPage;
	const paginatedData = sortedData.slice(
		startIndex,
		startIndex + rowsPerPage
	);

	const totalPages = Math.ceil(filteredData.length / rowsPerPage);

	return (
		<div className="table-container">
			<input
				type="text"
				placeholder="Filter..."
				value={filterText}
				onChange={handleFilterChange}
				className="filter-input"
			/>
			<table>
				<thead>
					<tr>
						<th onClick={() => handleSort("id")}>ID</th>
						<th onClick={() => handleSort("name")}>Name</th>
						<th onClick={() => handleSort("age")}>Age</th>
					</tr>
				</thead>
				<tbody>
					{paginatedData.map((item) => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.name}</td>
							<td>{item.age}</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className="pagination-buttons">
				{Array.from(
					{ length: totalPages },
					(_, index) => index + 1
				).map((page) => (
					<button
						key={page}
						onClick={() => setCurrentPage(page)}
						disabled={currentPage === page}></button>
				))}
			</div>
		</div>
	);
};

render(<DataTable />)
`;

	const initialCSS = `.table-container {
	width: 80%;
	margin: 20px auto;
	border-collapse: collapse;
}

.filter-input {
	margin-bottom: 10px;
	padding: 8px;
	width: 100%;
	box-sizing: border-box;
	border-radius: 10px;
}

table {
	width: 100%;
	border: 1px solid #ccc;
	border-collapse: collapse;
}

th,
td {
	border: 1px solid #ccc;
	padding: 10px;
	text-align: left;
}

th {
	cursor: pointer;
	background-color: #f2f2f2;
	color: #000;
}

th:hover {
	background-color: #ddd;
}

.pagination-buttons {
	margin-top: 10px;
	text-align: center;
}

.pagination-buttons button {
	margin: 0 5px;
	padding: 8px 12px;
	border: 1px solid #ccc;
	background-color: #f2f2f2;
	cursor: pointer;
	border-radius: 10px;
}

.pagination-buttons button:disabled {
	background-color: #747474;
	cursor: pointer;
}`;

	return (
		<div className="width">
			<p className="SectionTitle">Data Table</p>
			<div className="sectionDiv">
				<LiveEditorComponent
					initialCode={initialCode}
					initialCSS={initialCSS}
				/>
			</div>
		</div>
	);
};

export default DataTablePayload;
