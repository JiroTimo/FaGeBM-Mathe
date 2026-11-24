function solveQuadratic(a, b, c) {
    let discriminant = b ** 2 - 4 * a * c
    if (discriminant == 0) {
        return []
    }
    let sqrtD = Math.sqrt(discriminant)

    return [((-b + sqrtD) / 2 * a), ((-b - sqrtD) / 2 * a)]
}