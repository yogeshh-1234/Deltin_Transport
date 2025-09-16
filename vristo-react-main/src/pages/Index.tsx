import { Search, Home, Car, Clock, MapPin, Phone, User, AlertCircle, CheckCircle, XCircle, Pause } from 'lucide-react';
import { BookIcon, CarIcon, CircleStatusIcon, DriverIcon, FilterIcon, FromToIcon, GpsIcon, GuestIcon, HomeIcon, NotesIcon, PlusIcon, StaffIcon } from '../assets/icons/Icon';
import { useState } from 'react';

export default function () {
    const [active, setActive] = useState('from');
    return (
        <div className="min-h-screen bg-gray-50 p-4">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <HomeIcon height={18} width={18} />
                    <h1 className="text-xl font-semibold text-gray-900">Fleet Dashboard</h1>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex gap-1 items-center px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        <DriverIcon height={16} width={16} fill={'#7553C3'} />
                        <p>60/100</p>
                    </div>
                    <div className="flex gap-1 items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        <CarIcon height={20} width={18} fill={'#1E8BF1'} />
                        <p>60/100</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Requests & Vehicle Panel */}
                <div className="lg:col-span-9">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-full">
                        <div className="grid grid-cols-1 lg:grid-cols-9 h-full">
                            {/* VEHICLES */}
                            <div className="lg:col-span-5 border-r border-gray-200">
                                <div className="bg-white rounded-lg ">
                                    <div className="p-2">
                                        <div className="flex items-center justify-between py-3 border-b border-gray-200">
                                            <h2 className="text-base font-medium text-gray-900">Requests</h2>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <span>From</span>
                                                <select className="border border-gray-300 rounded px-2 py-1 text-xs bg-white">
                                                    <option>02:00 pm</option>
                                                </select>
                                                <span>To</span>
                                                <select className="border border-gray-300 rounded px-2 py-1 text-xs bg-white">
                                                    <option>04:00 pm</option>
                                                </select>
                                                <button className="h-7 w-7 bg-[#7553C3] hover:bg-[#7553C3] rounded flex items-center justify-center text-white">
                                                    <PlusIcon height={14} width={14} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-1 space-y-3">
                                        <div className="flex items-center gap-2 w-full">
                                            <div className="relative flex-1">
                                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                                <input
                                                    placeholder="Search"
                                                    className="w-full pl-9 pr-3 py-2 border border-[#E7E7E7] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                                />
                                            </div>
                                            <div className="px-2 py-2 border rounded-md border-[#E7E7E7]">
                                                <FilterIcon height={20} width={18} />
                                            </div>
                                        </div>

                                        <CustomRequestCard
                                            time="00:00"
                                            returnTime="00:00"
                                            passenger="Yogesh Chodankar"
                                            pax="3"
                                            from="Fortune Miramar"
                                            to="Deltin Royale"
                                            driverAssigned=""
                                            carAssigned="Carnival GA05M1234"
                                            staff={true}
                                            borderColor="border-l-yellow-400"
                                            isDisposal={true}
                                        />

                                        <CustomRequestCard
                                            time="00:00"
                                            returnTime="00:00"
                                            passenger="Sushmita Gawas"
                                            pax="3"
                                            from="Fortune Miramar"
                                            to="Deltin Royale"
                                            driverAssigned="Yogesh shiodkar"
                                            carAssigned=""
                                            staff={true}
                                            borderColor="border-l-red-400"
                                            isDisposal={false}
                                        />

                                        <CustomRequestCard
                                            time="00:00"
                                            passenger="Prachi kalekar"
                                            pax="3"
                                            from="Fortune Miramar"
                                            to="Deltin Royale"
                                            driverAssigned="Prthmesh Kerkar"
                                            carAssigned="Carnival GA05M1234"
                                            guest={true}
                                            borderColor="border-l-yellow-400"
                                            isDisposal={true}
                                        />

                                        <CustomRequestCard
                                            time="00:00"
                                            returnTime="00:00"
                                            passenger="Melwyn Pacheco"
                                            pax="7"
                                            from="Fortune Miramar"
                                            to="Deltin Royale"
                                            driverAssigned="Smodh Gaonkar"
                                            carAssigned=""
                                            guest={true}
                                            borderColor="border-l-green-400"
                                            isDisposal={true}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Vehicle Panel */}
                            <div className="lg:col-span-4">
                                {/* <div className="bg-white rounded-lg shadow-sm border border-gray-200"> */}
                                <div className="p-2">
                                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                                        <h2 className="text-base font-medium text-gray-900">Vehicle</h2>
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <span>From</span>
                                            <select className="border border-gray-300 rounded px-2 py-1 text-xs bg-white">
                                                <option>02:00 pm</option>
                                            </select>
                                            <span>To</span>
                                            <select className="border border-gray-300 rounded px-2 py-1 text-xs bg-white">
                                                <option>04:00 pm</option>
                                            </select>
                                            <button className="h-6 w-6 bg-green-600 hover:bg-green-700 rounded flex items-center justify-center">
                                                <GpsIcon height={14} width={14} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-4 py-1 space-y-3">
                                    <div className="flex items-center gap-2">
                                        {/* Search Input */}
                                        <div className="relative flex-1">
                                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                            <input
                                                placeholder="Search"
                                                className="w-full pl-9 pr-3 py-2 border border-[#E7E7E7] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                            />
                                        </div>

                                        {/* From / To Toggle */}
                                        <div className="flex items-center border bg-[#E7E7E7] rounded-md bg-gray-100 h-10 overflow-hidden">
                                            <button
                                                onClick={() => setActive('from')}
                                                className={`px-2 text-sm h-full ${active === 'from' ? 'bg-white text-emerald-600 font-semibold' : 'text-gray-600'}`}
                                            >
                                                From
                                            </button>
                                            <button onClick={() => setActive('to')} className={`px-3 text-sm h-full ${active === 'to' ? 'bg-white text-emerald-600 font-semibold' : 'text-gray-600'}`}>
                                                To
                                            </button>
                                        </div>

                                        {/* Select */}
                                        <select className="border border-gray-300 rounded-md bg-white px-2 h-10 text-sm">
                                            <option>Panjim</option>
                                        </select>

                                        {/* Filter Icon */}
                                        <button className="flex items-center justify-center border border-gray-300 rounded-md h-10 w-10 bg-gray-100">
                                            <FilterIcon height={16} width={16} />
                                        </button>
                                    </div>
                                    <CustomVehicleCard
                                        model="BMW | GA11B4567"
                                        driver="David Noronha"
                                        phone="9876543210"
                                        nextTrip="4:30 pm"
                                        status="available"
                                        statusColor="bg-green-100 text-green-700"
                                    />

                                    <CustomVehicleCard model="BMW | GA05C4512" driver="N/A" nextTrip="N/A" status="incomplete" statusColor="bg-orange-100 text-orange-700" />

                                    <CustomVehicleCard
                                        model="BMW | GA11B4567"
                                        driver="Smodh Gaonkar"
                                        phone="9876543210"
                                        nextTrip="4:30 pm"
                                        status="available"
                                        statusColor="bg-green-100 text-green-700"
                                    />

                                    <CustomVehicleCard
                                        model="BMW | GA11D4348"
                                        driver="Lexmon Kubai"
                                        phone="9876543210"
                                        nextTrip="4:30 pm"
                                        status="available"
                                        statusColor="bg-green-100 text-green-700"
                                    />

                                    <CustomVehicleCard
                                        model="BMW | GA11D4348"
                                        driver="Melvin Pinto"
                                        phone="9876543210"
                                        nextTrip="4:30 pm"
                                        status="returning"
                                        statusColor="bg-yellow-100 text-yellow-700"
                                    />

                                    <CustomVehicleCard
                                        model="BMW | GA05C4512"
                                        driver="Sanjit Naik"
                                        phone="9876543210"
                                        nextTrip="4:30 pm"
                                        status="returning"
                                        statusColor="bg-yellow-100 text-yellow-700"
                                    />

                                    <CustomVehicleCard
                                        model="BMW | GA05C4512"
                                        driver="Prathomesh Kerkar"
                                        phone="9876543210"
                                        nextTrip="4:30 pm"
                                        status="enroute"
                                        statusColor="bg-blue-100 text-blue-700"
                                    />

                                    <CustomVehicleCard
                                        model="BMW | GA05C4512"
                                        driver="Sujeet Shetty"
                                        phone="9876543210"
                                        nextTrip="4:30 pm"
                                        status="incomplete"
                                        statusColor="bg-orange-100 text-orange-700"
                                    />
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Activity Timeline Panel */}
                <div className="lg:col-span-3">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className="p-4 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <h2 className="text-base font-medium text-gray-900">Activity Timeline</h2>
                                <div className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-medium">Issues 2</div>
                            </div>
                        </div>
                        <div className="p-4 space-y-4">
                            <CustomActivityItem user="David Noronha" action="Failed to pick Lexmon Kubai" time="ddmmyyyy HH:MM" type="error" avatar="DN" />

                            <CustomActivityItem user="David Noronha" action="assigned a trip to pick up Lexmon Kubai" time="ddmmyyyy HH:MM" type="assigned" avatar="DN" />

                            <CustomActivityItem user="David Noronha" action="dropped Melwyn Pacheco" time="ddmmyyyy HH:MM" type="success" avatar="DN" />

                            <CustomActivityItem user="David Noronha" action="resumed back his trip" time="ddmmyyyy HH:MM" type="success" avatar="DN" />

                            <CustomActivityItem user="David Noronha" action="pause to trip due to engine issues" time="ddmmyyyy HH:MM" type="warning" avatar="DN" />

                            <CustomActivityItem user="David Noronha" action="resumed back his trip" time="ddmmyyyy HH:MM" type="success" avatar="DN" />

                            <CustomActivityItem user="David Noronha" action="pause to trip due to engine issues" time="ddmmyyyy HH:MM" type="warning" avatar="DN" />

                            <CustomActivityItem user="David Noronha" action="picked up Melwyn Pacheco" time="ddmmyyyy HH:MM" type="success" avatar="DN" />

                            <CustomActivityItem user="David Noronha" action="accepted trip to pickup Melwyn Pacheco" time="ddmmyyyy HH:MM" type="success" avatar="DN" />

                            <CustomActivityItem user="David Noronha" action="assigned a trip to pick up Melwyn Pacheco" time="ddmmyyyy HH:MM" type="assigned" avatar="DN" />

                            <div className="space-y-2 pt-4 border-t border-gray-200">
                                <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg border border-red-200">
                                    <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                                    <span className="text-red-700 text-sm flex-1">David Noronha Failed to pick Lexmon Kubai</span>
                                    <span className="text-xs text-red-500">ddmmyyyy HH:MM</span>
                                </div>
                                <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg border border-red-200">
                                    <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                                    <span className="text-red-700 text-sm flex-1">David Noronha Failed to pick Lexmon Kubai</span>
                                    <span className="text-xs text-red-500">ddmmyyyy HH:MM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CustomRequestCard({
    time,
    returnTime,
    passenger,
    pax,
    from,
    to,
    driverAssigned,
    carAssigned,
    staff,
    guest,
    borderColor,
    isDisposal,
}: {
    time: string;
    returnTime?: string;
    passenger: string;
    pax: string;
    from: string;
    to: string;
    driverAssigned: string;
    carAssigned: string;
    staff?: boolean;
    guest?: boolean;
    borderColor: string;
    isDisposal: boolean;
}) {
    return (
        <div className={`bg-white rounded-lg border border-gray-200 ${borderColor} border-l-4 shadow-sm`}>
            <div className="p-3">
                <div className="space-y-2">
                    <div className="flex items-center text-xs text-gray-500">
                        <span>Pick up time: {time}</span>
                        <span className="mx-1">|</span>
                        <span>Return Time: {returnTime}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="font-medium text-xl text-gray-900">
                            {passenger} | {pax}
                        </div>

                        <div className="flex gap-2">
                            {staff && (
                                <div className="flex gap-1 items-center bg-[#FFF2CB] border border-[#FFD966] rounded-full px-2 py-1 ">
                                    <StaffIcon height={16} width={16} />
                                    <span className="text-xs">Staff</span>
                                </div>
                            )}
                            {guest && (
                                <div className="flex gap-1 items-center bg-[#D2F0FF] border border-[#D2F0FF] rounded-full px-2 py-1 ">
                                    <GuestIcon height={16} width={16} />
                                    <span className="text-xs">Guest</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-gray-500">
                        <span>{from}</span>
                        <FromToIcon height={16} width={16} />
                        <span>{to}</span>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                        {driverAssigned ? (
                            <span className="inline-flex gap-1 items-center px-2 py-1 rounded-full text-xs font-medium bg-[#DBFFD1] text-[#00A14B] border border-[#DBFFD1]">
                                <DriverIcon height={16} width={16} fill={'#00A14B'} />
                                {driverAssigned}
                            </span>
                        ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-[#FFE3E3] text-[#E34750] border border-[#FFE3E3]">
                                <DriverIcon height={16} width={16} fill={'#E34750'} />
                                Not Assigned
                            </span>
                        )}

                        {carAssigned ? (
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-[#DBFFD1] text-[#00A14B] border border-[#DBFFD1]">
                                <CarIcon height={16} width={16} fill={'#00A14B'} />
                                {carAssigned}
                            </span>
                        ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-[#FFE3E3] text-[#E34750] border border-[#FFE3E3]">
                                <CarIcon height={16} width={16} fill={'#E34750'} />
                                Not Assigned
                            </span>
                        )}

                        {isDisposal && (
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-[#EADDFF] text-[#7553C3] border border-[#EADDFF]">
                                <BookIcon height={14} width={14} />
                                Disposal
                            </span>
                        )}

                        {/* {assignedTo && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200">
                                <User className="h-3 w-3 mr-1" />
                                {assignedTo}
                            </span>
                        )} */}

                        {/* {carnivalId && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700 border border-purple-200">
                                <Car className="h-3 w-3 mr-1" />
                                Carnival {carnivalId}
                            </span>
                        )} */}
                    </div>
                </div>
            </div>
        </div>
    );
}

function CustomVehicleCard({ model, driver, phone, nextTrip, status, statusColor }: { model: string; driver: string; phone?: string; nextTrip: string; status: string; statusColor: string }) {
    return (
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="p-3">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                        <CarIcon height={20} width={20} fill={'#FFFFFF'} />
                    </div>

                    <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                            <span className="font-medium text-sm text-gray-900">{model}</span>
                            <NotesIcon height={20} width={20} />
                            <div className="bg-['#FFE3E3] rounded-full flex items-center gap-1 justify-center flex-shrink-0 bg-[#DBFFD1] py-1 px-2">
                                <CircleStatusIcon height={18} width={18} fill={'#00A14B'} />
                                <span className="text-xs">Available</span>
                            </div>
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-[#EADDFF] text-[#7553C3] border border-[#EADDFF]">
                                <BookIcon height={14} width={14} />
                                Disposal
                            </span>
                        </div>

                        <div className="text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                                <DriverIcon height={18} width={18} fill={'#000'} />
                                <span>{driver}</span>
                                <span>{`(60) |`}</span>
                                <span>{phone}</span>
                            </div>
                        </div>

                        <div className="text-xs text-gray-500">Next Trip Starts: {nextTrip}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CustomActivityItem({ user, action, time, type, avatar }: { user: string; action: string; time: string; type: 'error' | 'success' | 'warning' | 'assigned'; avatar: string }) {
    const getStatusIcon = () => {
        switch (type) {
            case 'error':
                return <XCircle className="h-4 w-4 text-red-500" />;
            case 'success':
                return <CheckCircle className="h-4 w-4 text-green-500" />;
            case 'warning':
                return <AlertCircle className="h-4 w-4 text-yellow-500" />;
            case 'assigned':
                return <User className="h-4 w-4 text-blue-500" />;
            default:
                return <CheckCircle className="h-4 w-4 text-green-500" />;
        }
    };

    return (
        <div className="flex items-start gap-3">
            <div className="flex items-center gap-2">
                {getStatusIcon()}
                <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-medium text-blue-700">{avatar}</span>
                </div>
            </div>

            <div className="flex-1 space-y-1">
                <div className="text-sm">
                    <span className="font-medium text-gray-900">{user}</span>
                    <span className="text-gray-600"> {action}</span>
                </div>
                <div className="text-xs text-gray-500">{time}</div>
            </div>
        </div>
    );
}
