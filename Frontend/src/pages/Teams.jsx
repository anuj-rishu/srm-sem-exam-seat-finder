import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const Teams = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDomain, setSelectedDomain] = useState("all");

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get("https://sic-team-info.vercel.app/api/webadmin/admins/profile");
        if (response.data.success) {
          setTeamMembers(response.data.data);
        } else {
          setError("Failed to load team data");
        }
      } catch (error) {
        console.error("Error fetching team data:", error);
        setError("An error occurred while fetching team data");
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  const roleOrder = {
    "Founder": 1,
    "Co-Founder": 1,
    "President": 2,
    "Vice President": 2,
    "Technical Director": 2,
    "Lead": 3,
    "Associate": 4,
    "Member": 5
  };

  const leadershipRoles = ["Founder", "Co-Founder", "President", "Vice President", "Technical Director"];

  const domains = ["all", ...new Set(teamMembers
    .filter(member => !leadershipRoles.includes(member.domain.role) && member.domain.name !== "Technical Director")
    .map(member => member.domain.name))];

  const getFilteredMembers = () => {
    const leadership = teamMembers.filter(member => 
      leadershipRoles.includes(member.domain.role) && member.domain.role !== "Technical Director"
    );

    const others = selectedDomain === "all" 
      ? teamMembers.filter(member => !leadershipRoles.includes(member.domain.role))
      : teamMembers.filter(member => 
          member.domain.name === selectedDomain && 
          !leadershipRoles.includes(member.domain.role)
        );

    return [...leadership, ...others];
  };

  const filteredMembers = getFilteredMembers();

  const groupedByRole = filteredMembers.reduce((acc, member) => {
    const role = member.domain.role;
    if (!acc[role]) {
      acc[role] = [];
    }
    acc[role].push(member);
    return acc;
  }, {});

  const getGroupedSections = () => {
    const sections = [];
    
    const founders = [
      ...(groupedByRole["Founder"] || []),
      ...(groupedByRole["Co-Founder"] || [])
    ];
    
    if (founders.length > 0) {
      sections.push({
        title: "Founders",
        members: founders,
        isTopLevel: true
      });
    }

    const directors = [
      ...(groupedByRole["President"] || []),
      ...(groupedByRole["Vice President"] || []),
      ...(groupedByRole["Technical Director"] || [])
    ];

    if (directors.length > 0) {
      sections.push({
        title: "Directors",
        members: directors,
        isTopLevel: false
      });
    }

    const otherRoles = Object.keys(groupedByRole)
      .filter(role => !leadershipRoles.includes(role))
      .sort((a, b) => (roleOrder[a] || 99) - (roleOrder[b] || 99));

    otherRoles.forEach(role => {
      sections.push({
        title: role + (groupedByRole[role].length > 1 ? 's' : ''),
        members: groupedByRole[role],
        isTopLevel: false
      });
    });

    return sections;
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getColorFromName = (name) => {
    const colors = [
      'from-blue-500 to-cyan-500',
      'from-purple-500 to-pink-500',
      'from-green-500 to-emerald-500',
      'from-orange-500 to-red-500',
      'from-indigo-500 to-purple-500',
      'from-teal-500 to-green-500',
      'from-rose-500 to-pink-500',
      'from-amber-500 to-orange-500',
    ];
    const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[index % colors.length];
  };

  const TeamMemberCard = ({ member, size = "normal" }) => {
    const initials = getInitials(member.name);
    const gradientColor = getColorFromName(member.name);
    const isLarge = size === "large";
    
    return (
      <div className="group relative flex flex-col items-center w-full sm:w-auto">
        <div className={`w-full bg-gradient-to-br from-[#0C0F1B]/90 to-[#18202e]/90 backdrop-blur-sm border border-[#666668]/30 ${isLarge ? 'sm:rounded-3xl rounded-2xl sm:p-8 p-6' : 'rounded-2xl p-5 sm:p-6'} overflow-hidden hover:border-[#257093]/60 hover:bg-[#257093]/5 active:scale-[0.98] transition-all duration-500 transform sm:hover:scale-105 hover:shadow-2xl hover:shadow-[#257093]/30 ${isLarge ? 'sm:w-80 max-w-sm' : 'sm:w-72 max-w-xs'} mx-auto`}>
          <div className="flex flex-col items-center relative">
            
            <div className="relative mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#257093] to-[#18a0d8] rounded-full blur-md opacity-30 group-hover:opacity-75 transition duration-500 animate-pulse"></div>
              <div className={`relative ${isLarge ? 'w-28 h-28 sm:w-36 sm:h-36' : 'w-24 h-24 sm:w-28 sm:h-28'} rounded-full overflow-hidden border-4 border-[#257093] group-hover:border-[#18a0d8] transition-all bg-[#0C0F1B] shadow-xl`}>
                {member.profilePhoto ? (
                  <img 
                    src={member.profilePhoto} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div 
                  className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${gradientColor} ${member.profilePhoto ? 'hidden' : 'flex'}`}
                  style={{ display: member.profilePhoto ? 'none' : 'flex' }}
                >
                  <span className={`text-white ${isLarge ? 'text-3xl sm:text-5xl' : 'text-2xl sm:text-3xl'} font-bold drop-shadow-lg`}>{initials}</span>
                </div>
              </div>
              
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 sm:px-4 sm:py-1.5 bg-gradient-to-r from-[#257093] to-[#18a0d8] rounded-full border-2 border-[#0C0F1B] shadow-xl">
                <span className={`text-white text-xs ${isLarge ? 'sm:text-sm' : ''} font-bold whitespace-nowrap`}>{member.domain.role}</span>
              </div>
            </div>
            
            <div className="text-center w-full z-10">
              <h3 className={`${isLarge ? 'text-lg sm:text-2xl' : 'text-lg sm:text-xl'} font-bold text-white mb-2 group-hover:text-[#18a0d8] transition-colors leading-tight px-2`}>{member.name}</h3>
              
              <div className="inline-flex items-center bg-[#257093]/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-3 border border-[#257093]/30">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#18a0d8] mr-2 animate-pulse"></div>
                <p className="text-[#18a0d8] font-semibold text-xs sm:text-sm">{member.domain.name}</p>
              </div>
              
              {member.bio && (
                <p className="text-[#666668] text-xs sm:text-sm text-center mb-3 sm:mb-4 line-clamp-2 px-2 italic">
                  "{member.bio}"
                </p>
              )}
              
              <div className="flex justify-center space-x-2 sm:space-x-3 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-[#666668]/20">
                {member.linkedinProfile && (
                  <a 
                    href={member.linkedinProfile} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group/social p-2.5 sm:p-3 bg-[#257093]/10 hover:bg-[#257093]/20 active:bg-[#257093]/30 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-[#257093]/30"
                    aria-label="LinkedIn Profile"
                  >
                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-[#257093] group-hover/social:text-[#18a0d8] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                )}
                {member.githubProfile && (
                  <a 
                    href={member.githubProfile} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group/social p-2.5 sm:p-3 bg-[#257093]/10 hover:bg-[#257093]/20 active:bg-[#257093]/30 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-[#257093]/30"
                    aria-label="GitHub Profile"
                  >
                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-[#257093] group-hover/social:text-[#18a0d8] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                )}
                {!member.linkedinProfile && !member.githubProfile && (
                  <div className="text-[#666668]/40 text-xs italic py-2">No social links</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const TreeView = () => {
    const sections = getGroupedSections();
    
    return (
      <div className="space-y-12 sm:space-y-20">
        {sections.map((section) => {
          const memberCount = section.members.length;
          
          return (
            <div key={section.title} className="relative">
              {!section.isTopLevel && (
                <div className="hidden sm:flex absolute top-0 left-1/2 -translate-x-1/2 -translate-y-20 flex-col items-center">
                  <div className="w-1 h-16 bg-gradient-to-b from-[#257093] via-[#18a0d8] to-[#257093] rounded-full shadow-lg shadow-[#257093]/50"></div>
                  <div className="w-4 h-4 bg-gradient-to-br from-[#257093] to-[#18a0d8] rounded-full shadow-lg shadow-[#257093]/50 animate-pulse"></div>
                </div>
              )}

              <div className="text-center mb-8 sm:mb-12 relative px-4">
                <div className="inline-block relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#257093] to-[#18a0d8] blur-xl sm:blur-2xl opacity-40 animate-pulse"></div>
                  <h2 className="relative text-2xl sm:text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-[#257093] via-[#18a0d8] to-[#257093] bg-clip-text text-transparent px-4 sm:px-8 py-2 sm:py-3">
                    {section.title}
                  </h2>
                </div>
                <div className="mt-3 sm:mt-4 h-1 sm:h-1.5 w-32 sm:w-48 mx-auto bg-gradient-to-r from-transparent via-[#257093] to-transparent rounded-full shadow-lg shadow-[#257093]/50"></div>
              </div>

              <div className="relative px-2 sm:px-0">
                {memberCount > 1 && !section.isTopLevel && (
                  <div className="hidden sm:flex absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 items-center justify-center" style={{ width: `${Math.min(memberCount * 300, 90)}%` }}>
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#257093] to-transparent rounded-full shadow-lg shadow-[#257093]/30"></div>
                  </div>
                )}

                {memberCount > 1 && !section.isTopLevel && (
                  <div className="hidden sm:flex absolute top-0 -translate-y-8 justify-center gap-4 w-full" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                    {section.members.map((_, index) => (
                      <div 
                        key={index} 
                        className="flex-1 flex justify-center"
                      >
                        <div className="w-1 h-8 bg-gradient-to-b from-[#257093] to-transparent rounded-full"></div>
                      </div>
                    ))}
                  </div>
                )}

                <div className={`grid grid-cols-1 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 ${
                  section.isTopLevel && memberCount <= 2
                    ? 'sm:max-w-4xl mx-auto'
                    : memberCount === 1
                    ? 'sm:max-w-md mx-auto'
                    : ''
                }`}>
                  {section.members.map((member) => (
                    <TeamMemberCard 
                      key={member.adminId} 
                      member={member}
                      size={section.isTopLevel ? "large" : "normal"}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0C0F1B] via-[#18202e] to-[#0C0F1B] text-white flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-block mb-4 sm:mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#257093] to-[#18a0d8] blur-2xl sm:blur-3xl opacity-30 animate-pulse"></div>
                <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-3 sm:mb-4 bg-gradient-to-r from-white via-[#18a0d8] to-white bg-clip-text text-transparent px-2">
                  Our Team
                </h1>
              </div>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-[#666668] max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Meet the passionate minds driving <span className="text-[#257093] font-semibold">SRM Insider Community</span>
            </p>

            <div className="overflow-x-auto pb-2 -mx-3 px-3 sm:mx-0 sm:px-0">
              <div className="flex sm:flex-wrap justify-start sm:justify-center gap-2 md:gap-3 mb-6 min-w-max sm:min-w-0">
                {domains.map(domain => (
                  <button
                    key={domain}
                    onClick={() => setSelectedDomain(domain)}
                    className={`px-4 sm:px-5 md:px-6 py-2 md:py-2.5 rounded-lg sm:rounded-xl font-medium text-sm md:text-base transition-all duration-300 whitespace-nowrap active:scale-95 ${
                      selectedDomain === domain
                        ? 'bg-gradient-to-r from-[#257093] to-[#18a0d8] text-white shadow-lg shadow-[#257093]/30 scale-105'
                        : 'bg-[#0C0F1B]/50 border border-[#666668]/20 text-[#666668] hover:border-[#257093] hover:text-white sm:hover:scale-105'
                    }`}
                  >
                    {domain === "all" ? "All Domains" : domain}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {loading ? (
            <Loader />
          ) : error ? (
            <div className="text-center py-8 sm:py-12 bg-red-900/20 border-2 border-red-500/20 rounded-2xl p-6 sm:p-8 mx-2 sm:mx-0">
              <svg className="h-12 w-12 sm:h-16 sm:w-16 text-red-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-red-400 text-base sm:text-lg font-medium">{error}</p>
            </div>
          ) : (
            <TreeView />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Teams;
