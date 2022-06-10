import BoxItem from '../BoxItem'

import IconFeelsLike from '../../assets/icon/feelsLike.svg'
import IconHumidity from '../../assets/icon/humidity.svg'
import IconWind from '../../assets/icon/wind.svg'
import IconWinDir from '../../assets/icon/windDir.svg'
import IconVisibility from '../../assets/icon/visibility.svg'
import IconUvIndex from '../../assets/icon/uvIndex.svg'

export default function Weather({ feelsLike, humidity, wind, windDir, visibility, uvIndex }) {
    const completeWindDir =
        windDir === 'NE'
            ? `North East`
            : windDir === 'NW'
            ? `North West`
            : windDir === 'SE'
            ? `South East`
            : windDir === 'SW'
            ? `South West`
            : windDir === 'E'
            ? `East`
            : windDir === 'W'
            ? `West`
            : windDir === 'N'
            ? `North`
            : windDir === 'S'
            ? `South`
            : `Unknown`
    return (
        <div className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-1 md:-mx-2 lg:-mx-2 xl:-mx-2 w-full">
            <BoxItem icon={IconFeelsLike} title={feelsLike + `º`} subtitle="FEELS LIKE" />
            <BoxItem icon={IconHumidity} title={humidity + `%`} subtitle="HUMIDITY" />
            <BoxItem icon={IconWind} title={wind + `km/h`} subtitle="WIND" />
            <BoxItem icon={IconWinDir} title={completeWindDir} subtitle="WIND DIR" />
            <BoxItem icon={IconVisibility} title={visibility + `km`} subtitle="VISIBILITY" />
            <BoxItem icon={IconUvIndex} title={uvIndex} subtitle="UV INDEX" />
        </div>
    )
}
