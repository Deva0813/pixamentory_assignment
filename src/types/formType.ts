export interface Main {
    latitude:              number;
    longitude:             number;
    generationtime_ms:     number;
    utc_offset_seconds:    number;
    timezone:              string;
    timezone_abbreviation: string;
    elevation:             number;
    current_weather:       CurrentWeather;
    daily_units:           DailyUnits;
    daily:                 Daily;
}

export interface CurrentWeather {
    temperature:   number;
    windspeed:     number;
    winddirection: number;
    weathercode:   number;
    is_day:        number;
    time:          string;
}

export interface Daily {
    time:                   Date[];
    weathercode:            number[];
    temperature_2m_max:     number[];
    temperature_2m_min:     number[];
    uv_index_max:           number[];
    uv_index_clear_sky_max: number[];
    precipitation_sum:      number[];
    rain_sum:               number[];
    showers_sum:            number[];
    snowfall_sum:           number[];
    windspeed_10m_max:      number[];
    windgusts_10m_max:      number[];
}

export interface DailyUnits {
    time:                   string;
    weathercode:            string;
    temperature_2m_max:     string;
    temperature_2m_min:     string;
    uv_index_max:           string;
    uv_index_clear_sky_max: string;
    precipitation_sum:      string;
    rain_sum:               string;
    showers_sum:            string;
    snowfall_sum:           string;
    windspeed_10m_max:      string;
    windgusts_10m_max:      string;
}
