document.addEventListener("DOMContentLoaded", () => {
    // --- DOM Elements ---
    const cpu1Select = document.getElementById("cpu1");
    const cpu2Select = document.getElementById("cpu2");
    const compareBtn = document.getElementById("compareBtn");
    const resultContainer = document.getElementById("result-container");
    const tableBody = document.getElementById("tableBody");
    const errorMessage = document.getElementById("error-message");
    const cpu1Header = document.getElementById("cpu1Header");
    const cpu2Header = document.getElementById("cpu2Header");

    // --- Constants ---
    const BRAND_COLORS = {
        Intel: 'intel',
        AMD: 'amd'
    };
    
    // Properties where a lower value is better.
    const LOWER_IS_BETTER = ["tdp", "process", "price"];

    // Prettier names for properties
    const PROPERTY_NAMES = {
        brand: "Brand",
        model: "Model",
        cores: "Cores",
        threads: "Threads",
        base_clock: "Base Clock",
        boost_clock: "Boost Clock",
        tdp: "TDP (Watts)",
        process: "Process (nm)",
        cache: "Cache (MB)",
        price: "Price (USD)"
    };

    // --- Initialize Searchable Dropdowns ---
    const choices1 = new Choices(cpu1Select, { searchEnabled: true, itemSelectText: '' });
    const choices2 = new Choices(cpu2Select, { searchEnabled: true, itemSelectText: '' });

    // --- Functions ---

    /**
     * Populates dropdowns with CPU data, grouped by brand.
     */
    function populateDropdowns() {
        const groupedOptions = Object.values(
            cpuData.reduce((acc, cpu) => {
                acc[cpu.brand] = acc[cpu.brand] || { label: cpu.brand, choices: [] };
                acc[cpu.brand].choices.push({
                    value: cpu.model,
                    label: `${cpu.brand} ${cpu.model}`
                });
                return acc;
            }, {})
        );

        choices1.setChoices(groupedOptions, 'value', 'label', true);
        choices2.setChoices(groupedOptions, 'value', 'label', true);
    }

    /**
     * Finds a CPU object by its model name.
     * @param {string} model - The model name of the CPU.
     * @returns {object|undefined} The CPU data object.
     */
    function getCpuByModel(model) {
        return cpuData.find(cpu => cpu.model === model);
    }

    /**
     * Parses a string value (e.g., "3.5 GHz", "$199") into a number for comparison.
     * @param {string|number} value - The value to parse.
     * @returns {number} The parsed numeric value.
     */
    function parseValue(value) {
        if (typeof value === 'number') return value;
        const numericPart = String(value).match(/[\d.]+/);
        return numericPart ? parseFloat(numericPart[0]) : 0;
    }

    /**
     * Displays an error message to the user.
     * @param {string} message - The message to display.
     */
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.classList.remove("error-hidden");
    }

    /**
     * Hides the error message.
     */
    function hideError() {
        errorMessage.classList.add("error-hidden");
    }

    /**
     * Handles the main comparison logic.
     */
    function handleComparison() {
        const model1 = cpu1Select.value;
        const model2 = cpu2Select.value;

        // Validation
        if (!model1 || !model2) {
            showError("Please select two processors to compare.");
            return;
        }
        if (model1 === model2) {
            showError("Please select two different processors.");
            return;
        }
        hideError();

        const cpu1 = getCpuByModel(model1);
        const cpu2 = getCpuByModel(model2);

        // Set table header styles based on brand
        cpu1Header.className = BRAND_COLORS[cpu1.brand] || '';
        cpu2Header.className = BRAND_COLORS[cpu2.brand] || '';
        cpu1Header.textContent = `${cpu1.brand} ${cpu1.model}`;
        cpu2Header.textContent = `${cpu2.brand} ${cpu2.model}`;

        tableBody.innerHTML = ""; // Clear previous results

        const propertiesToCompare = Object.keys(PROPERTY_NAMES);

        propertiesToCompare.forEach(prop => {
            const val1 = cpu1[prop];
            const val2 = cpu2[prop];

            const pVal1 = parseValue(val1);
            const pVal2 = parseValue(val2);

            let winnerClass1 = '';
            let winnerClass2 = '';

            if (pVal1 !== 0 && pVal2 !== 0 && pVal1 !== pVal2) {
                if (LOWER_IS_BETTER.includes(prop)) {
                    if (pVal1 < pVal2) winnerClass1 = 'winner';
                    if (pVal2 < pVal1) winnerClass2 = 'winner';
                } else {
                    if (pVal1 > pVal2) winnerClass1 = 'winner';
                    if (pVal2 > pVal1) winnerClass2 = 'winner';
                }
            }

            const row = document.createElement("tr");
            row.innerHTML = `
              <td>${PROPERTY_NAMES[prop]}</td>
              <td class="${winnerClass1}">${val1}</td>
              <td class="${winnerClass2}">${val2}</td>
            `;
            tableBody.appendChild(row);
        });

        resultContainer.classList.remove("hidden");
    }

    // --- Event Listeners ---
    compareBtn.addEventListener("click", handleComparison);

    // --- Initial Setup ---
    populateDropdowns();
});