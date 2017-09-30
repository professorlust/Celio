const SOLAR_ABSMAG = 4.83
const LN_MAG = 1.085736
const LY_PER_PARSEC = 3.26167
const KM_PER_LY = 9460730472580.8

const KM_PER_AU = 149597870.7
const AU_PER_LY = (KM_PER_LY / KM_PER_AU)
const KM_PER_PARSEC = (KM_PER_LY * LY_PER_PARSEC)

const DAYS_PER_YEAR = 365.25

const SECONDS_PER_DAY = 86400.0
const MINUTES_PER_DAY = 1440.0
const HOURS_PER_DAY = 24.0

const MINUTES_PER_DEG = 60.0
const SECONDS_PER_DEG = 3600.0
const DEG_PER_HRA = 15.0

const EARTH_RADIUS = 6378.14
const JUPITER_RADIUS = 71492.0
const SOLAR_RADIUS = 696000.0

const SPEED_OF_LIGHT = 299792.458
const G = 6.672e-11

const SOLAR_MASS = 1.989e30
const EARTH_MASS = 5.976e24
const LUNAR_MASS = 7.354e22

const SOLAR_IRRADIANCE = 1367.6 // Watts / m^2
const SOLAR_POWER = 3.8462e26 // Watts

module.exports = {
  SOLAR_ABSMAG,
  LN_MAG,
  LY_PER_PARSEC,
  KM_PER_LY,
  KM_PER_AU,
  AU_PER_LY,
  KM_PER_PARSEC,
  DAYS_PER_YEAR,
  SECONDS_PER_DAY,
  MINUTES_PER_DAY,
  HOURS_PER_DAY,
  MINUTES_PER_DEG,
  SECONDS_PER_DEG,
  DEG_PER_HRA,
  EARTH_RADIUS,
  JUPITER_RADIUS,
  SOLAR_RADIUS,
  SPEED_OF_LIGHT,
  G,
  SOLAR_MASS,
  EARTH_MASS,
  LUNAR_MASS,
  SOLAR_IRRADIANCE,
  SOLAR_POWER
}