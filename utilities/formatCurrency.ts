const FORMAT_CORRENCY = Intl.NumberFormat(undefined, {
    currency: 'USD', style: 'currency'
})

export function formatCurrency(number: number) {
    return FORMAT_CORRENCY.format(number)

}