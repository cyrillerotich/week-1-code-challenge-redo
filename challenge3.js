function getNetSalary(basicSalary, benefit) {
    const grossSalary = basicSalary + benefit
    let NSSF = getNSSF(grossSalary)
    let NHIF = getNHIF(grossSalary)
    let PAYE = getPAYE(grossSalary, NHIF, NSSF)
    let deductions = NHIF + NSSF + PAYE
    let Netsalary = grossSalary - deductions
    return {
        employeeGrossSalary: GrossSalary,
        employeePAYEDeduction: PAYE,
        employeeNHIFDeduction: NHIF,
        employeeNSSFDeduction: NSSF,
        employeeNetSalary: Netsalary,
    }
}

function getNSSF(grossSalary) {
    let NSSFDeduction = grossSalary * 0.06
    if (NSSFDeduction > 6000) {
        NSSFDeduction = 6000
    }
    return NSSFDeduction
}
function getNHIF(grossSalary) {
    let NHIFDeduction
    if (grossSalary < 5999) {
        NHIFDeduction = 150
    }
    else if (grossSalary >= 6000 && grossSalary <= 7999) {
        NHIFDeduction = 300
    }
    else if (grossSalary >= 8000 && grossSalary <= 11999) {
        NHIFDeduction = 400
    }
    else if (grossSalary >= 12000 && grossSalary <= 14999) {
        NHIFDeduction = 500
    }
    else if (grossSalary >= 15000 && grossSalary <= 19999) {
        NHIFDeduction = 600
    }
    else if (grossSalary >= 20000 && grossSalary <= 24999) {
        NHIFDeduction = 750
    }
    else if (grossSalary >= 25000 && grossSalary <= 29999) {
        NHIFDeduction = 850
    }
    else if (grossSalary >= 30000 && grossSalary <= 34999) {
        NHIFDeduction = 900
    }
    else if (grossSalary >= 35000 && grossSalary <= 39999) {
        NHIFDeduction = 950
    }
    else if (grossSalary >= 40000 && grossSalary <= 44999) {
        NHIFDeduction = 1000
    }
    else if (grossSalary >= 45000 && grossSalary <= 49999) {
        NHIFDeduction = 1100
    }
    else if (grossSalary >= 50000 && grossSalary <= 59999) {
        NHIFDeduction = 1200
    }
    else if (grossSalary >= 60000 && grossSalary <= 69999) {
        NHIFDeduction = 1300
    }
    else if (grossSalary >= 70000 && grossSalary <= 79999) {
        NHIFDeduction = 1400
    }
    else if (grossSalary >= 80000 && grossSalary <= 89999) {
        NHIFDeduction = 1500
    }
    else if (grossSalary >= 90000 && grossSalary <= 99999) {
        NHIFDeduction = 1600
    }
    else if (grossSalary >= 100000) {
        NHIFDeduction = 1700
    }
    return NHIFDeduction
}
function getPAYE(grossSalary, NHIFDeduction, NSSFDeduction) {
    const relief = 2400
    let taxableincome = grossSalary - (NHIFDeduction + NSSFDeduction)
    let paye
    let payeDeduction
    if (taxableincome < 24000) {
        paye = taxableincome * 0.1
    }
    else if (taxableincome >= 24001 && taxableincome <= 32333) {
        paye = taxableincome * 0.25
    }
    else if (taxableincome > 32333) {
        paye = taxableincome * 0.3
    }
    payeDeduction = paye - relief
    if (payeDeduction < 0) {
        payeDeduction = 0
    }
    return payeDeduction
}
