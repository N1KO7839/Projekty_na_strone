const countriesEN = [
    { name: 'Poland', flagURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1200px-Flag_of_Poland.svg.png', shortcuts: ['pl'], continent:'Europe'},
    { name: 'Germany', flagURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/640px-Flag_of_Germany.svg.png', shortcuts: ['de'], continent: 'Europe' },
    { name: 'France', flagURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png', shortcuts: ['fr'], continent: 'Europe' },
    { name: 'Spain', flagURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png', shortcuts: ['es'], continent: 'Europe' },
    { name: 'Italy', flagURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png', shortcuts: ['it'], continent: 'Europe' },
    { name: 'India', flagURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png', shortcuts: ['in'], continent: 'Asia' },
    { name: 'China', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1200px-Flag_of_the_People%27s_Republic_of_China.svg.png', shortcuts: ['cn'], continent: 'Asia' },
    { name: 'Brazil', flagURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png', shortcuts: ['br'], continent: 'America' },
    { name: 'Japan', flagURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png', shortcuts: ['jp'], continent: 'Asia' },
    { name: 'South Korea', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1280px-Flag_of_South_Korea.svg.png', shortcuts: ['kr'], continent: 'Asia' },
    { name: 'Australia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1280px-Flag_of_Australia_%28converted%29.svg.png', shortcuts: ['au'], continent: 'Oceania' },
    { name: 'Canada', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png', shortcuts: ['ca'], continent: 'America' },
    { name: 'Mexico', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png', shortcuts: ['mx'], continent: 'America' },
    { name: 'Russia', flagURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png', shortcuts: ['ru'], continent: 'Asia' },
    { name: 'Argentina', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png', shortcuts: ['ar'], continent: 'America' },
    { name: 'Egypt', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/1200px-Flag_of_Egypt.svg.png', shortcuts: ['eg'], continent: 'Africa' },
    { name: 'South Africa', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/1280px-Flag_of_South_Africa.svg.png', shortcuts: ['za'], continent: 'Africa' },
    { name: 'Nigeria', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/1200px-Flag_of_Nigeria.svg.png', shortcuts: ['ng'], continent: 'Africa' },
    { name: 'Saudi Arabia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1200px-Flag_of_Saudi_Arabia.svg.png', shortcuts: ['sa'], continent: 'Asia' },
    { name: 'Turkey', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/1200px-Flag_of_Turkey.svg.png', shortcuts: ['tr'], continent: 'Europe' },
    { name: 'Norway', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/640px-Flag_of_Norway.svg.png', shortcuts: ['no'], continent: 'Europe' },
    { name: 'Sweden', flagURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1280px-Flag_of_Sweden.svg.png', shortcuts: ['se'], continent: 'Europe' },
    { name: 'Switzerland', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/1280px-Flag_of_Switzerland.svg.png', shortcuts: ['ch'], continent: 'Europe' },
    { name: 'Ireland', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/1280px-Flag_of_Ireland.svg.png', shortcuts: ['ie'], continent: 'Europe' },
    { name: 'Greece', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/1280px-Flag_of_Greece.svg.png', shortcuts: ['gr'], continent: 'Europe' },
    { name: 'Thailand', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/1280px-Flag_of_Thailand.svg.png', shortcuts: ['th'], continent: 'Asia' },
    { name: 'Vietnam', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1280px-Flag_of_Vietnam.svg.png', shortcuts: ['vn'], continent: 'Asia' },
    { name: 'New Zealand', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/1280px-Flag_of_New_Zealand.svg.png', shortcuts: ['nz'], continent: 'Oceania' },
    { name: 'Portugal', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1280px-Flag_of_Portugal.svg.png', shortcuts: ['pt'], continent: 'Europe' },
    { name: 'Austria', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/1280px-Flag_of_Austria.svg.png', shortcuts: ['at'], continent: 'Europe' },
    { name: 'United States', flagURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png', shortcuts: ['us'], continent: 'America' },
    { name: 'United Kingdom', flagURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png', shortcuts: ['uk'], continent: 'Europe' },
    { name: 'South Sudan', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_South_Sudan.svg/1280px-Flag_of_South_Sudan.svg.png', shortcuts: ['ss'], continent: 'Africa' },
    { name: 'Indonesia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/1280px-Flag_of_Indonesia.svg.png', shortcuts: ['id'], continent: 'Asia' },
    { name: 'Netherlands', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1280px-Flag_of_the_Netherlands.svg.png', shortcuts: ['nl'], continent: 'Europe' },
    { name: 'Belgium', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Belgium_%28civil%29.svg/1280px-Flag_of_Belgium_%28civil%29.svg.png', shortcuts: ['be'], continent: 'Europe' },
    { name: 'Finland', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/1280px-Flag_of_Finland.svg.png', shortcuts: ['fi'], continent: 'Europe' },
    { name: 'Denmark', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1280px-Flag_of_Denmark.svg.png', shortcuts: ['dk'], continent: 'Europe' },
    { name: 'Iceland', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/1280px-Flag_of_Iceland.svg.png', shortcuts: ['is'], continent: 'Europe' },
    { name: 'Czech', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/1280px-Flag_of_the_Czech_Republic.svg.png', shortcuts: ['cz'], continent: 'Europe' },
    { name: 'Hungary', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/1280px-Flag_of_Hungary.svg.png', shortcuts: ['hu'], continent: 'Europe' },
    { name: 'Romania', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/1280px-Flag_of_Romania.svg.png', shortcuts: ['ro'], continent: 'Europe' },
    { name: 'Bulgaria', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/1280px-Flag_of_Bulgaria.svg.png', shortcuts: ['bg'], continent: 'Europe' },
    { name: 'Slovakia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/1280px-Flag_of_Slovakia.svg.png', shortcuts: ['sk'], continent: 'Europe' },
    { name: 'Luxembourg', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/1280px-Flag_of_Luxembourg.svg.png', shortcuts: ['lu'], continent: 'Europe' },
    { name: 'Estonia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/1280px-Flag_of_Estonia.svg.png', shortcuts: ['ee'], continent: 'Europe' },
    { name: 'Latvia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/1280px-Flag_of_Latvia.svg.png', shortcuts: ['lv'], continent: 'Europe' },
    { name: 'Lithuania', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/1280px-Flag_of_Lithuania.svg.png', shortcuts: ['lt'], continent: 'Europe' },
    { name: 'Slovenia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/1280px-Flag_of_Slovenia.svg.png', shortcuts: ['si'], continent: 'Europe' },
    { name: 'Croatia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1280px-Flag_of_Croatia.svg.png', shortcuts: ['hr'], continent: 'Europe' },
    { name: 'Bosnia and Herzegovina', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1280px-Flag_of_Bosnia_and_Herzegovina.svg.png', shortcuts: ['ba'], continent: 'Europe' },
    { name: 'Montenegro', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Montenegro.svg/1280px-Flag_of_Montenegro.svg.png', shortcuts: ['me'], continent: 'Europe' },
    { name: 'North Macedonia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/1280px-Flag_of_North_Macedonia.svg.png', shortcuts: ['mk'], continent: 'Europe' },
    { name: 'Serbia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/1280px-Flag_of_Serbia.svg.png', shortcuts: ['rs'], continent: 'Europe' },
    { name: 'Kosovo', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Flag_of_Kosovo.svg/1280px-Flag_of_Kosovo.svg.png', shortcuts: ['xk'], continent: 'Europe' },
    { name: 'Albania', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/1280px-Flag_of_Albania.svg.png', shortcuts: ['al'], continent: 'Europe' },
    { name: 'Malta', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Malta.svg/1280px-Flag_of_Malta.svg.png', shortcuts: ['mt'], continent: 'Europe' },
    { name: 'Cyprus', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Cyprus.svg/1280px-Flag_of_Cyprus.svg.png', shortcuts: ['cy'], continent: 'Europe' },
    { name: 'Moldova', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/1280px-Flag_of_Moldova.svg.png', shortcuts: ['md'], continent: 'Europe' },
    { name: 'Belarus', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/1280px-Flag_of_Belarus.svg.png', shortcuts: ['by'], continent: 'Europe' },
    { name: 'Ukraine', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1280px-Flag_of_Ukraine.svg.png', shortcuts: ['ua'], continent: 'Europe' },
    { name: 'Georgia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/1280px-Flag_of_Georgia.svg.png', shortcuts: ['ge'], continent: 'Asia' },
    { name: 'Armenia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1280px-Flag_of_Armenia.svg.png', shortcuts: ['am'], continent: 'Asia' },
    { name: 'Azerbaijan', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/1280px-Flag_of_Azerbaijan.svg.png', shortcuts: ['az'], continent: 'Asia' },
    { name: 'Kazakhstan', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/1280px-Flag_of_Kazakhstan.svg.png', shortcuts: ['kz'], continent: 'Asia' },
    { name: 'Uzbekistan', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1280px-Flag_of_Uzbekistan.svg.png', shortcuts: ['uz'], continent: 'Asia' },
    { name: 'Turkmenistan', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Turkmenistan.svg/1280px-Flag_of_Turkmenistan.svg.png', shortcuts: ['tm'], continent: 'Asia' },
    { name: 'Kyrgyzstan', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/1280px-Flag_of_Kyrgyzstan.svg.png', shortcuts: ['kg'], continent: 'Asia' },
    { name: 'Tajikistan', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Tajikistan.svg/1280px-Flag_of_Tajikistan.svg.png', shortcuts: ['tj'], continent: 'Asia' },
    { name: 'Afghanistan', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg/255px-Flag_of_Afghanistan_%282013%E2%80%932021%29.svg.png', shortcuts: ['af'], continent: 'Asia' },
    { name: 'Pakistan', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/1280px-Flag_of_Pakistan.svg.png', shortcuts: ['pk'], continent: 'Asia' },
    { name: 'Bangladesh', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/1280px-Flag_of_Bangladesh.svg.png', shortcuts: ['bd'], continent: 'Asia' },
    { name: 'Sri Lanka', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/1280px-Flag_of_Sri_Lanka.svg.png', shortcuts: ['lk'], continent: 'Asia' },
    { name: 'Nepal', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/1280px-Flag_of_Nepal.svg.png', shortcuts: ['np'], continent: 'Asia' },
    { name: 'Bhutan', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_Bhutan.svg/1280px-Flag_of_Bhutan.svg.png', shortcuts: ['bt'], continent: 'Asia' },
    { name: 'Maldives', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Maldives.svg/1280px-Flag_of_Maldives.svg.png', shortcuts: ['mv'], continent: 'Asia' },
    { name: 'Myanmar', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/1280px-Flag_of_Myanmar.svg.png', shortcuts: ['mm'], continent: 'Asia' },
    { name: 'Laos', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/1280px-Flag_of_Laos.svg.png', shortcuts: ['la'], continent: 'Asia' },
    { name: 'Cambodia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/1280px-Flag_of_Cambodia.svg.png', shortcuts: ['kh'], continent: 'Asia' },
    { name: 'Mongolia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/1280px-Flag_of_Mongolia.svg.png', shortcuts: ['mn'], continent: 'Asia' },
    { name: 'Philippines', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/1280px-Flag_of_the_Philippines.svg.png', shortcuts: ['ph'], continent: 'Asia' },
    { name: 'Singapore', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/1280px-Flag_of_Singapore.svg.png', shortcuts: ['sg'], continent: 'Asia' },
    { name: 'Malaysia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/1280px-Flag_of_Malaysia.svg.png', shortcuts: ['my'], continent: 'Asia' },
    { name: 'Brunei', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Brunei.svg/1280px-Flag_of_Brunei.svg.png', shortcuts: ['bn'], continent: 'Asia' },
    { name: 'Qatar', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/1200px-Flag_of_Qatar.svg.png', shortcuts: ['qa'], continent: 'Asia' },
    { name: 'Oman', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Oman.svg/1280px-Flag_of_Oman.svg.png', shortcuts: ['om'], continent: 'Asia' },
    { name: 'Yemen', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/1280px-Flag_of_Yemen.svg.png', shortcuts: ['ye'], continent: 'Asia' },
    { name: 'Lebanon', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/1280px-Flag_of_Lebanon.svg.png', shortcuts: ['lb'], continent: 'Asia' },
    { name: 'Jordan', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/1280px-Flag_of_Jordan.svg.png', shortcuts: ['jo'], continent: 'Asia' },
    { name: 'Iraq', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/1280px-Flag_of_Iraq.svg.png', shortcuts: ['iq'], continent: 'Asia' },
    { name: 'Syria', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Flag_of_Syria.svg/1280px-Flag_of_Syria.svg.png', shortcuts: ['sy'], continent: 'Asia' },
    { name: 'Iran', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/1280px-Flag_of_Iran.svg.png', shortcuts: ['ir'], continent: 'Asia' },
    { name: 'Kuwait', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Kuwait.svg/1280px-Flag_of_Kuwait.svg.png', shortcuts: ['kw'], continent: 'Asia' },
    { name: 'Bahrain', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Bahrain.svg/1280px-Flag_of_Bahrain.svg.png', shortcuts: ['bh'], continent: 'Asia' },
    { name: 'East Timor', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_East_Timor.svg/1280px-Flag_of_East_Timor.svg.png', shortcuts: ['tl'], continent: 'Asia' },
    { name: 'Papua New Guinea', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Flag_of_Papua_New_Guinea.svg/1280px-Flag_of_Papua_New_Guinea.svg.png', shortcuts: ['pg'], continent: 'Oceania' },
    { name: 'Fiji', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Fiji.svg/1280px-Flag_of_Fiji.svg.png', shortcuts: ['fj'], continent: 'Oceania' },
    { name: 'Solomon Islands', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_the_Solomon_Islands.svg/1280px-Flag_of_the_Solomon_Islands.svg.png', shortcuts: ['sb'], continent: 'Oceania' },
    { name: 'Vanuatu', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Vanuatu.svg/1280px-Flag_of_Vanuatu.svg.png', shortcuts: ['vu'], continent: 'Oceania' },
    { name: 'Samoa', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Samoa.svg/1280px-Flag_of_Samoa.svg.png', shortcuts: ['ws'], continent: 'Oceania' },
    { name: 'Tonga', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Tonga.svg/1280px-Flag_of_Tonga.svg.png', shortcuts: ['to'], continent: 'Oceania' },
    { name: 'Tuvalu', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tuvalu.svg/1280px-Flag_of_Tuvalu.svg.png', shortcuts: ['tv'], continent: 'Oceania' },
    { name: 'Nauru', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Flag_of_Nauru.svg/1280px-Flag_of_Nauru.svg.png', shortcuts: ['nr'], continent: 'Oceania' },
    { name: 'Micronesia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg/1280px-Flag_of_the_Federated_States_of_Micronesia.svg.png', shortcuts: ['fm'], continent: 'Oceania' },
    { name: 'Marshall Islands', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flag_of_the_Marshall_Islands.svg/1280px-Flag_of_the_Marshall_Islands.svg.png', shortcuts: ['mh'], continent: 'Oceania' },
    { name: 'Palau', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Palau.svg/1280px-Flag_of_Palau.svg.png', shortcuts: ['pw'], continent: 'Oceania' },
    { name: 'Comoros', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Flag_of_the_Comoros.svg/1280px-Flag_of_the_Comoros.svg.png', shortcuts: ['km'], continent: 'Africa' },
    { name: 'Mauritius', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Mauritius.svg/1280px-Flag_of_Mauritius.svg.png', shortcuts: ['mu'], continent: 'Africa' },
    { name: 'Djibouti', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_Djibouti.svg/1280px-Flag_of_Djibouti.svg.png', shortcuts: ['dj'], continent: 'Africa' },
    { name: 'Lesotho', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Flag_of_Lesotho.svg/1280px-Flag_of_Lesotho.svg.png', shortcuts: ['ls'], continent: 'Africa' },
    { name: 'Malawi', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag_of_Malawi.svg/1280px-Flag_of_Malawi.svg.png', shortcuts: ['mw'], continent: 'Africa' },
    { name: 'Mozambique', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Mozambique.svg/1280px-Flag_of_Mozambique.svg.png', shortcuts: ['mz'], continent: 'Africa' },
    { name: 'Zimbabwe', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flag_of_Zimbabwe.svg/1280px-Flag_of_Zimbabwe.svg.png', shortcuts: ['zw'], continent: 'Africa' },
    { name: 'Botswana', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Botswana.svg/1280px-Flag_of_Botswana.svg.png', shortcuts: ['bw'], continent: 'Africa' },
    { name: 'Angola', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/1280px-Flag_of_Angola.svg.png', shortcuts: ['ao'], continent: 'Africa' },
    { name: 'Burundi', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_of_Burundi.svg/1280px-Flag_of_Burundi.svg.png', shortcuts: ['bi'], continent: 'Africa' },
    { name: 'Cameroon', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/1280px-Flag_of_Cameroon.svg.png', shortcuts: ['cm'], continent: 'Africa' },
    { name: 'Central African Republic', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Central_African_Republic.svg/1280px-Flag_of_the_Central_African_Republic.svg.png', shortcuts: ['cf'], continent: 'Africa' },
    { name: 'Chad', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Chad.svg/1280px-Flag_of_Chad.svg.png', shortcuts: ['td'], continent: 'Africa' },
    { name: 'Congo', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/1280px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png', shortcuts: ['cd'], continent: 'Africa' },
    { name: 'Equatorial Guinea', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Equatorial_Guinea.svg/1280px-Flag_of_Equatorial_Guinea.svg.png', shortcuts: ['gq'], continent: 'Africa' },
    { name: 'Eritrea', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flag_of_Eritrea.svg/1280px-Flag_of_Eritrea.svg.png', shortcuts: ['er'], continent: 'Africa' },
    { name: 'Gabon', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Gabon.svg/1280px-Flag_of_Gabon.svg.png', shortcuts: ['ga'], continent: 'Africa' },
    { name: 'Gambia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_The_Gambia.svg/1280px-Flag_of_The_Gambia.svg.png', shortcuts: ['gm'], continent: 'Africa' },
    { name: 'Guinea', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_of_Guinea.svg/1280px-Flag_of_Guinea.svg.png', shortcuts: ['gn'], continent: 'Africa' },
    { name: 'Guinea-Bissau', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Guinea-Bissau.svg/1280px-Flag_of_Guinea-Bissau.svg.png', shortcuts: ['gw'], continent: 'Africa' },
    { name: 'Ivory Coast', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg/1280px-Flag_of_C%C3%B4te_d%27Ivoire.svg.png', shortcuts: ['ci'], continent: 'Africa' },
    { name: 'Liberia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Flag_of_Liberia.svg/1280px-Flag_of_Liberia.svg.png', shortcuts: ['lr'], continent: 'Africa' },
    { name: 'Madagascar', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Madagascar.svg/1280px-Flag_of_Madagascar.svg.png', shortcuts: ['mg'], continent: 'Africa' },
    { name: 'Mali', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Mali.svg/1280px-Flag_of_Mali.svg.png', shortcuts: ['ml'], continent: 'Africa' },
    { name: 'Mauritania', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Flag_of_Mauritania.svg/1280px-Flag_of_Mauritania.svg.png', shortcuts: ['mr'], continent: 'Africa' },
    { name: 'Niger', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flag_of_Niger.svg/1280px-Flag_of_Niger.svg.png', shortcuts: ['ne'], continent: 'Africa' },
    { name: 'Rwanda', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Rwanda.svg/1280px-Flag_of_Rwanda.svg.png', shortcuts: ['rw'], continent: 'Africa' },
    { name: 'Senegal', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/1280px-Flag_of_Senegal.svg.png', shortcuts: ['sn'], continent: 'Africa' },
    { name: 'Sierra Leone', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Sierra_Leone.svg/1280px-Flag_of_Sierra_Leone.svg.png', shortcuts: ['sl'], continent: 'Africa' },
    { name: 'Somalia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Somalia.svg/1280px-Flag_of_Somalia.svg.png', shortcuts: ['so'], continent: 'Africa' },
    { name: 'Tanzania', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tanzania.svg/1280px-Flag_of_Tanzania.svg.png', shortcuts: ['tz'], continent: 'Africa' },
    { name: 'Togo', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Flag_of_Togo.svg/1280px-Flag_of_Togo.svg.png', shortcuts: ['tg'], continent: 'Africa' },
    { name: 'Uganda', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/1280px-Flag_of_Uganda.svg.png', shortcuts: ['ug'], continent: 'Africa' },
    { name: 'Benin', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Benin.svg/1280px-Flag_of_Benin.svg.png', shortcuts: ['bj'], continent: 'Africa' },
    { name: 'Burkina Faso', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Burkina_Faso.svg/1280px-Flag_of_Burkina_Faso.svg.png', shortcuts: ['bf'], continent: 'Africa' },
    { name: 'Cape Verde', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Cape_Verde.svg/1280px-Flag_of_Cape_Verde.svg.png', shortcuts: ['cv'], continent: 'Africa' },
    { name: 'Libya', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Libya.svg', shortcuts: ['ly'], continent: 'Africa' },
    { name: 'Namibia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Namibia.svg/1280px-Flag_of_Namibia.svg.png', shortcuts: ['na'], continent: 'Africa' },
    { name: 'Sudan', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Sudan.svg/1280px-Flag_of_Sudan.svg.png', shortcuts: ['sd'], continent: 'Africa' },
    { name: 'Tunisia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/1280px-Flag_of_Tunisia.svg.png', shortcuts: ['tn'], continent: 'Africa' },
    { name: 'Zambia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Zambia.svg/1280px-Flag_of_Zambia.svg.png', shortcuts: ['zm'], continent: 'Africa' },
    { name: 'Antigua and Barbuda', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Antigua_and_Barbuda.svg/1280px-Flag_of_Antigua_and_Barbuda.svg.png', shortcuts: ['ag'], continent: 'America' },
    { name: 'Bahamas', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_the_Bahamas.svg/1280px-Flag_of_the_Bahamas.svg.png', shortcuts: ['bs'], continent: 'America' },
    { name: 'Barbados', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Barbados.svg/1280px-Flag_of_Barbados.svg.png', shortcuts: ['bb'], continent: 'America' },
    { name: 'Belize', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Belize.svg/1280px-Flag_of_Belize.svg.png', shortcuts: ['bz'], continent: 'America' },
    { name: 'Costa Rica', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Costa_Rica_%28state%29.svg/1280px-Flag_of_Costa_Rica_%28state%29.svg.png', shortcuts: ['cr'], continent: 'America' },
    { name: 'Cuba', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/1280px-Flag_of_Cuba.svg.png', shortcuts: ['cu'], continent: 'America' },
    { name: 'Dominica', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Flag_of_Dominica.svg/1280px-Flag_of_Dominica.svg.png', shortcuts: ['dm'], continent: 'America' },
    { name: 'Dominican Republic', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/1280px-Flag_of_the_Dominican_Republic.svg.png', shortcuts: ['do'], continent: 'America' },
    { name: 'El Salvador', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/1280px-Flag_of_El_Salvador.svg.png', shortcuts: ['sv'], continent: 'America' },
    { name: 'Guatemala', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/1280px-Flag_of_Guatemala.svg.png', shortcuts: ['gt'], continent: 'America' },
    { name: 'Haiti', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Haiti.svg/1280px-Flag_of_Haiti.svg.png', shortcuts: ['ht'], continent: 'America' },
    { name: 'Jamaica', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/1280px-Flag_of_Jamaica.svg.png', shortcuts: ['jm'], continent: 'America' },
    { name: 'Saint Kitts and Nevis', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg/1280px-Flag_of_Saint_Kitts_and_Nevis.svg.png', shortcuts: ['kn'], continent: 'America' },
    { name: 'Saint Lucia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Saint_Lucia.svg/1280px-Flag_of_Saint_Lucia.svg.png', shortcuts: ['lc'], continent: 'America' },
    { name: 'Saint Vincent and the Grenadines', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg/1280px-Flag_of_Saint_Vincent_and_the_Grenadines.svg.png', shortcuts: ['vc'], continent: 'America' },
    { name: 'Trinidad and Tobago', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Trinidad_and_Tobago.svg/1280px-Flag_of_Trinidad_and_Tobago.svg.png', shortcuts: ['tt'], continent: 'America' },
    { name: 'Honduras', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Honduras.svg/1280px-Flag_of_Honduras.svg.png', shortcuts: ['hn'], continent: 'America' },
    { name: 'Suriname', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_Suriname.svg/1280px-Flag_of_Suriname.svg.png', shortcuts: ['sr'], continent: 'America' },
    { name: 'Guyana', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_Guyana.svg/1920px-Flag_of_Guyana.svg.png', shortcuts: ['gy'], continent: 'America' },
    { name: 'Paraguay', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/1280px-Flag_of_Paraguay.svg.png', shortcuts: ['py'], continent: 'America' },
    { name: 'Uruguay', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/1280px-Flag_of_Uruguay.svg.png', shortcuts: ['uy'], continent: 'America' },
    { name: 'Lesotho', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Flag_of_Lesotho.svg/1280px-Flag_of_Lesotho.svg.png', shortcuts: ['ls'], continent: 'Africa' },
    { name: 'Eswatini', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Flag_of_Eswatini.svg/1024px-Flag_of_Eswatini.svg.png', shortcuts: ['sz'], continent: 'Africa' },
    { name: 'Cape Verde', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Cape_Verde.svg/1280px-Flag_of_Cape_Verde.svg.png', shortcuts: ['cv'], continent: 'Africa' },
    { name: 'Seychelles', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Seychelles.svg/1280px-Flag_of_Seychelles.svg.png', shortcuts: ['sc'], continent: 'Africa' },
    { name: 'Maldives', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Maldives.svg/1280px-Flag_of_Maldives.svg.png', shortcuts: ['mv'], continent: 'Asia' },
    { name: 'Brunei', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Brunei.svg/1280px-Flag_of_Brunei.svg.png', shortcuts: ['bn'], continent: 'Asia' },
    { name: 'East Timor', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_East_Timor.svg/1280px-Flag_of_East_Timor.svg.png', shortcuts: ['tl'], continent: 'Asia' },
    { name: 'Kiribati', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kiribati.svg/1280px-Flag_of_Kiribati.svg.png', shortcuts: ['ki'], continent: 'Oceania' },
    { name: 'Marshall Islands', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flag_of_the_Marshall_Islands.svg/1280px-Flag_of_the_Marshall_Islands.svg.png', shortcuts: ['mh'], continent: 'Oceania' },
    { name: 'Solomon Islands', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_the_Solomon_Islands.svg/1280px-Flag_of_the_Solomon_Islands.svg.png', shortcuts: ['sb'], continent: 'Oceania' },
    { name: 'Tuvalu', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tuvalu.svg/1280px-Flag_of_Tuvalu.svg.png', shortcuts: ['tv'], continent: 'Oceania' },
    { name: 'Nauru', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Flag_of_Nauru.svg/1280px-Flag_of_Nauru.svg.png', shortcuts: ['nr'], continent: 'Oceania' },
    { name: 'Micronesia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg/1280px-Flag_of_the_Federated_States_of_Micronesia.svg.png', shortcuts: ['fm'], continent: 'Oceania' },
    { name: 'Sao Tome and Principe', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg', shortcuts: ['st'], continent: 'Africa' },
    { name: 'Grenada', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Grenada.svg/1280px-Flag_of_Grenada.svg.png', shortcuts: ['gd'], continent: 'America' },
];  

const countriesPL = [
    { name: 'Polska', flagURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1200px-Flag_of_Poland.svg.png', shortcuts: ['pl'], continent:'Europe'},
    { name: 'Niemcy', flagURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/640px-Flag_of_Germany.svg.png', shortcuts: ['de'], continent: 'Europe' },
    { name: 'Francja', flagURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png', shortcuts: ['fr'], continent: 'Europe' },
    { name: 'Hiszpania', flagURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png', shortcuts: ['es'], continent: 'Europe' },
    { name: 'Włochy', flagURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png', shortcuts: ['it'], continent: 'Europe' },
    { name: 'Indie', flagURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png', shortcuts: ['in'], continent: 'Asia' },
    { name: 'Chiny', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1200px-Flag_of_the_People%27s_Republic_of_China.svg.png', shortcuts: ['cn'], continent: 'Asia' },
    { name: 'Brazylia', flagURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png', shortcuts: ['br'], continent: 'America' },
    { name: 'Japonia', flagURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png', shortcuts: ['jp'], continent: 'Asia' },
    { name: 'Korea Południowa', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1280px-Flag_of_South_Korea.svg.png', shortcuts: ['kr'], continent: 'Asia' },
    { name: 'Australia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1280px-Flag_of_Australia_%28converted%29.svg.png', shortcuts: ['au'], continent: 'Oceania' },
    { name: 'Kanada', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png', shortcuts: ['ca'], continent: 'America' },
    { name: 'Meksyk', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png', shortcuts: ['mx'], continent: 'America' },
    { name: 'Rosja', flagURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png', shortcuts: ['ru'], continent: 'Asia' },
    { name: 'Argentyna', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png', shortcuts: ['ar'], continent: 'America' },
    { name: 'Egipt', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/1200px-Flag_of_Egypt.svg.png', shortcuts: ['eg'], continent: 'Africa' },
    { name: 'Republika Południowej Afryki', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/1280px-Flag_of_South_Africa.svg.png', shortcuts: ['rpa'], continent: 'Africa' },
    { name: 'Nigeria', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/1200px-Flag_of_Nigeria.svg.png', shortcuts: ['ng'], continent: 'Africa' },
    { name: 'Arabia Saudyjska', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1200px-Flag_of_Saudi_Arabia.svg.png', shortcuts: ['sa'], continent: 'Asia' },
    { name: 'Turcja', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/1200px-Flag_of_Turkey.svg.png', shortcuts: ['tr'], continent: 'Europe' },
    { name: 'Norwegia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/640px-Flag_of_Norway.svg.png', shortcuts: ['no'], continent: 'Europe' },
    { name: 'Szwecja', flagURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1280px-Flag_of_Sweden.svg.png', shortcuts: ['se'], continent: 'Europe' },
    { name: 'Szwajcaria', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/1280px-Flag_of_Switzerland.svg.png', shortcuts: ['ch'], continent: 'Europe' },
    { name: 'Irlandia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/1280px-Flag_of_Ireland.svg.png', shortcuts: ['ie'], continent: 'Europe' },
    { name: 'Grecja', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/1280px-Flag_of_Greece.svg.png', shortcuts: ['gr'], continent: 'Europe' },
    { name: 'Tajlandia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/1280px-Flag_of_Thailand.svg.png', shortcuts: ['th'], continent: 'Asia' },
    { name: 'Wietnam', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1280px-Flag_of_Vietnam.svg.png', shortcuts: ['vn'], continent: 'Asia' },
    { name: 'Nowa Zelandia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/1280px-Flag_of_New_Zealand.svg.png', shortcuts: ['nz'], continent: 'Oceania' },
    { name: 'Portugalia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1280px-Flag_of_Portugal.svg.png', shortcuts: ['pt'], continent: 'Europe' },
    { name: 'Austria', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/1280px-Flag_of_Austria.svg.png', shortcuts: ['at'], continent: 'Europe' },
    { name: 'Stany Zjednoczone', flagURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png', shortcuts: ['us'], continent: 'America' },
    { name: 'Wielka Brytania', flagURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png', shortcuts: ['uk'], continent: 'Europe' },
    { name: 'Sudan Południowy', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_South_Sudan.svg/1280px-Flag_of_South_Sudan.svg.png', shortcuts: ['ss'], continent: 'Africa' },
    { name: 'Indonezja', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/1280px-Flag_of_Indonesia.svg.png', shortcuts: ['id'], continent: 'Asia' },
    { name: 'Holandia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1280px-Flag_of_the_Netherlands.svg.png', shortcuts: ['nl'], continent: 'Europe' },
    { name: 'Belgia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Belgium_%28civil%29.svg/1280px-Flag_of_Belgium_%28civil%29.svg.png', shortcuts: ['be'], continent: 'Europe' },
    { name: 'Finlandia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/1280px-Flag_of_Finland.svg.png', shortcuts: ['fi'], continent: 'Europe' },
    { name: 'Dania', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1280px-Flag_of_Denmark.svg.png', shortcuts: ['dk'], continent: 'Europe' },
    { name: 'Islandia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/1280px-Flag_of_Iceland.svg.png', shortcuts: ['is'], continent: 'Europe' },
    { name: 'Czechy', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/1280px-Flag_of_the_Czech_Republic.svg.png', shortcuts: ['cz'], continent: 'Europe' },
    { name: 'Węgry', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/1280px-Flag_of_Hungary.svg.png', shortcuts: ['hu'], continent: 'Europe' },
    { name: 'Rumunia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/1280px-Flag_of_Romania.svg.png', shortcuts: ['ro'], continent: 'Europe' },
    { name: 'Bułgaria', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/1280px-Flag_of_Bulgaria.svg.png', shortcuts: ['bg'], continent: 'Europe' },
    { name: 'Słowacja', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/1280px-Flag_of_Slovakia.svg.png', shortcuts: ['sk'], continent: 'Europe' },
    { name: 'Luksemburg', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/1280px-Flag_of_Luxembourg.svg.png', shortcuts: ['lu'], continent: 'Europe' },
    { name: 'Estonia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/1280px-Flag_of_Estonia.svg.png', shortcuts: ['ee'], continent: 'Europe' },
    { name: 'Łotwa', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/1280px-Flag_of_Latvia.svg.png', shortcuts: ['lv'], continent: 'Europe' },
    { name: 'Litwa', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/1280px-Flag_of_Lithuania.svg.png', shortcuts: ['lt'], continent: 'Europe' },
    { name: 'Słowenia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/1280px-Flag_of_Slovenia.svg.png', shortcuts: ['si'], continent: 'Europe' },
    { name: 'Chorwacja', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1280px-Flag_of_Croatia.svg.png', shortcuts: ['hr'], continent: 'Europe' },
    { name: 'Bośnia i Hercegowina', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1280px-Flag_of_Bosnia_and_Herzegovina.svg.png', shortcuts: ['ba'], continent: 'Europe' },
    { name: 'Czarnogóra', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Montenegro.svg/1280px-Flag_of_Montenegro.svg.png', shortcuts: ['me'], continent: 'Europe' },
    { name: 'Macedonia Północna', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/1280px-Flag_of_North_Macedonia.svg.png', shortcuts: ['mk'], continent: 'Europe' },
    { name: 'Serbia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/1280px-Flag_of_Serbia.svg.png', shortcuts: ['rs'], continent: 'Europe' },
    { name: 'Kosowo', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Flag_of_Kosovo.svg/1280px-Flag_of_Kosovo.svg.png', shortcuts: ['xk'], continent: 'Europe' },
    { name: 'Albania', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/1280px-Flag_of_Albania.svg.png', shortcuts: ['al'], continent: 'Europe' },
    { name: 'Malta', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Malta.svg/1280px-Flag_of_Malta.svg.png', shortcuts: ['mt'], continent: 'Europe' },
    { name: 'Cypr', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Cyprus.svg/1280px-Flag_of_Cyprus.svg.png', shortcuts: ['cy'], continent: 'Europe' },
    { name: 'Mołdawia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/1280px-Flag_of_Moldova.svg.png', shortcuts: ['md'], continent: 'Europe' },
    { name: 'Białoruś', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/1280px-Flag_of_Belarus.svg.png', shortcuts: ['by'], continent: 'Europe' },
    { name: 'Ukraina', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1280px-Flag_of_Ukraine.svg.png', shortcuts: ['ua'], continent: 'Europe' },
    { name: 'Gruzja', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/1280px-Flag_of_Georgia.svg.png', shortcuts: ['ge'], continent: 'Asia' },
    { name: 'Armenia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1280px-Flag_of_Armenia.svg.png', shortcuts: ['am'], continent: 'Asia' },
    { name: 'Azerbejdżan', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/1280px-Flag_of_Azerbaijan.svg.png', shortcuts: ['az'], continent: 'Asia' },
    { name: 'Kazachstan', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/1280px-Flag_of_Kazakhstan.svg.png', shortcuts: ['kz'], continent: 'Asia' },
    { name: 'Uzbekistan', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1280px-Flag_of_Uzbekistan.svg.png', shortcuts: ['uz'], continent: 'Asia' },
    { name: 'Turkmenistan', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Turkmenistan.svg/1280px-Flag_of_Turkmenistan.svg.png', shortcuts: ['tm'], continent: 'Asia' },
    { name: 'Kirgistan', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/1280px-Flag_of_Kyrgyzstan.svg.png', shortcuts: ['kg'], continent: 'Asia' },
    { name: 'Tadżykistan', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Tajikistan.svg/1280px-Flag_of_Tajikistan.svg.png', shortcuts: ['tj'], continent: 'Asia' },
    { name: 'Afganistan', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg/255px-Flag_of_Afghanistan_%282013%E2%80%932021%29.svg.png', shortcuts: ['af'], continent: 'Asia' },
    { name: 'Pakistan', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/1280px-Flag_of_Pakistan.svg.png', shortcuts: ['pk'], continent: 'Asia' },
    { name: 'Bangladesz', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/1280px-Flag_of_Bangladesh.svg.png', shortcuts: ['bd'], continent: 'Asia' },
    { name: 'Sri Lanka', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/1280px-Flag_of_Sri_Lanka.svg.png', shortcuts: ['lk'], continent: 'Asia' },
    { name: 'Nepal', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/1280px-Flag_of_Nepal.svg.png', shortcuts: ['np'], continent: 'Asia' },
    { name: 'Bhutan', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_Bhutan.svg/1280px-Flag_of_Bhutan.svg.png', shortcuts: ['bt'], continent: 'Asia' },
    { name: 'Malediwy', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Maldives.svg/1280px-Flag_of_Maldives.svg.png', shortcuts: ['mv'], continent: 'Asia' },
    { name: 'Mjanma', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/1280px-Flag_of_Myanmar.svg.png', shortcuts: ['mm'], continent: 'Asia' },
    { name: 'Laos', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/1280px-Flag_of_Laos.svg.png', shortcuts: ['la'], continent: 'Asia' },
    { name: 'Kambodża', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/1280px-Flag_of_Cambodia.svg.png', shortcuts: ['kh'], continent: 'Asia' },
    { name: 'Mongolia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/1280px-Flag_of_Mongolia.svg.png', shortcuts: ['mn'], continent: 'Asia' },
    { name: 'Filipiny', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/1280px-Flag_of_the_Philippines.svg.png', shortcuts: ['ph'], continent: 'Asia' },
    { name: 'Singapur', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/1280px-Flag_of_Singapore.svg.png', shortcuts: ['sg'], continent: 'Asia' },
    { name: 'Malaysia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/1280px-Flag_of_Malaysia.svg.png', shortcuts: ['my'], continent: 'Asia' },
    { name: 'Brunei', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Brunei.svg/1280px-Flag_of_Brunei.svg.png', shortcuts: ['bn'], continent: 'Asia' },
    { name: 'Qatar', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/1200px-Flag_of_Qatar.svg.png', shortcuts: ['qa'], continent: 'Asia' },
    { name: 'Oman', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Oman.svg/1280px-Flag_of_Oman.svg.png', shortcuts: ['om'], continent: 'Asia' },
    { name: 'Yemen', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/1280px-Flag_of_Yemen.svg.png', shortcuts: ['ye'], continent: 'Asia' },
    { name: 'Lebanon', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/1280px-Flag_of_Lebanon.svg.png', shortcuts: ['lb'], continent: 'Asia' },
    { name: 'Jordan', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/1280px-Flag_of_Jordan.svg.png', shortcuts: ['jo'], continent: 'Asia' },
    { name: 'Iraq', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/1280px-Flag_of_Iraq.svg.png', shortcuts: ['iq'], continent: 'Asia' },
    { name: 'Syria', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Flag_of_Syria.svg/1280px-Flag_of_Syria.svg.png', shortcuts: ['sy'], continent: 'Asia' },
    { name: 'Iran', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/1280px-Flag_of_Iran.svg.png', shortcuts: ['ir'], continent: 'Asia' },
    { name: 'Kuwait', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Kuwait.svg/1280px-Flag_of_Kuwait.svg.png', shortcuts: ['kw'], continent: 'Asia' },
    { name: 'Bahrain', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Bahrain.svg/1280px-Flag_of_Bahrain.svg.png', shortcuts: ['bh'], continent: 'Asia' },
    { name: 'Timor Wschodni', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_East_Timor.svg/1280px-Flag_of_East_Timor.svg.png', shortcuts: ['tl'], continent: 'Asia' },
    { name: 'Papua-Nowa Gwinea', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Flag_of_Papua_New_Guinea.svg/1280px-Flag_of_Papua_New_Guinea.svg.png', shortcuts: ['pg'], continent: 'Oceania' },
    { name: 'Fidżi', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Fiji.svg/1280px-Flag_of_Fiji.svg.png', shortcuts: ['fj'], continent: 'Oceania' },
    { name: 'Wyspy Salomona', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_the_Solomon_Islands.svg/1280px-Flag_of_the_Solomon_Islands.svg.png', shortcuts: ['sb'], continent: 'Oceania' },
    { name: 'Vanuatu', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Vanuatu.svg/1280px-Flag_of_Vanuatu.svg.png', shortcuts: ['vu'], continent: 'Oceania' },
    { name: 'Samoa', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Samoa.svg/1280px-Flag_of_Samoa.svg.png', shortcuts: ['ws'], continent: 'Oceania' },
    { name: 'Tonga', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Tonga.svg/1280px-Flag_of_Tonga.svg.png', shortcuts: ['to'], continent: 'Oceania' },
    { name: 'Tuvalu', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tuvalu.svg/1280px-Flag_of_Tuvalu.svg.png', shortcuts: ['tv'], continent: 'Oceania' },
    { name: 'Nauru', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Flag_of_Nauru.svg/1280px-Flag_of_Nauru.svg.png', shortcuts: ['nr'], continent: 'Oceania' },
    { name: 'Mikronezja', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg/1280px-Flag_of_the_Federated_States_of_Micronesia.svg.png', shortcuts: ['fm'], continent: 'Oceania' },
    { name: 'Wyspy Marshalla', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flag_of_the_Marshall_Islands.svg/1280px-Flag_of_the_Marshall_Islands.svg.png', shortcuts: ['mh'], continent: 'Oceania' },
    { name: 'Palau', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Palau.svg/1280px-Flag_of_Palau.svg.png', shortcuts: ['pw'], continent: 'Oceania' },
    { name: 'Komory', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Flag_of_the_Comoros.svg/1280px-Flag_of_the_Comoros.svg.png', shortcuts: ['km'], continent: 'Africa' },
    { name: 'Mauritius', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Mauritius.svg/1280px-Flag_of_Mauritius.svg.png', shortcuts: ['mu'], continent: 'Africa' },
    { name: 'Dżibuti', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_Djibouti.svg/1280px-Flag_of_Djibouti.svg.png', shortcuts: ['dj'], continent: 'Africa' },
    { name: 'Lesotho', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Flag_of_Lesotho.svg/1280px-Flag_of_Lesotho.svg.png', shortcuts: ['ls'], continent: 'Africa' },
    { name: 'Malawi', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag_of_Malawi.svg/1280px-Flag_of_Malawi.svg.png', shortcuts: ['mw'], continent: 'Africa' },
    { name: 'Mozambik', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Mozambique.svg/1280px-Flag_of_Mozambique.svg.png', shortcuts: ['mz'], continent: 'Africa' },
    { name: 'Zimbabwe', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flag_of_Zimbabwe.svg/1280px-Flag_of_Zimbabwe.svg.png', shortcuts: ['zw'], continent: 'Africa' },
    { name: 'Botswana', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Botswana.svg/1280px-Flag_of_Botswana.svg.png', shortcuts: ['bw'], continent: 'Africa' },
    { name: 'Angola', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/1280px-Flag_of_Angola.svg.png', shortcuts: ['ao'], continent: 'Africa' },
    { name: 'Burundi', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_of_Burundi.svg/1280px-Flag_of_Burundi.svg.png', shortcuts: ['bi'], continent: 'Africa' },
    { name: 'Kamerun', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/1280px-Flag_of_Cameroon.svg.png', shortcuts: ['cm'], continent: 'Africa' },
    { name: 'Republika Środkowoafrykańska', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Central_African_Republic.svg/1280px-Flag_of_the_Central_African_Republic.svg.png', shortcuts: ['cf'], continent: 'Africa' },
    { name: 'Czad', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Chad.svg/1280px-Flag_of_Chad.svg.png', shortcuts: ['td'], continent: 'Africa' },
    { name: 'Kongo', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/1280px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png', shortcuts: ['cd'], continent: 'Africa' },
    { name: 'Gwinea Równikowa', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Equatorial_Guinea.svg/1280px-Flag_of_Equatorial_Guinea.svg.png', shortcuts: ['gq'], continent: 'Africa' },
    { name: 'Erytrea', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flag_of_Eritrea.svg/1280px-Flag_of_Eritrea.svg.png', shortcuts: ['er'], continent: 'Africa' },
    { name: 'Gabon', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Gabon.svg/1280px-Flag_of_Gabon.svg.png', shortcuts: ['ga'], continent: 'Africa' },
    { name: 'Gambia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_The_Gambia.svg/1280px-Flag_of_The_Gambia.svg.png', shortcuts: ['gm'], continent: 'Africa' },
    { name: 'Gwinea', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_of_Guinea.svg/1280px-Flag_of_Guinea.svg.png', shortcuts: ['gn'], continent: 'Africa' },
    { name: 'Gwinea Bissau', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Guinea-Bissau.svg/1280px-Flag_of_Guinea-Bissau.svg.png', shortcuts: ['gw'], continent: 'Africa' },
    { name: 'Wybrzeże Kości Słoniowej', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg/1280px-Flag_of_C%C3%B4te_d%27Ivoire.svg.png', shortcuts: ['ci'], continent: 'Africa' },
    { name: 'Liberia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Flag_of_Liberia.svg/1280px-Flag_of_Liberia.svg.png', shortcuts: ['lr'], continent: 'Africa' },
    { name: 'Madagaskar', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Madagascar.svg/1280px-Flag_of_Madagascar.svg.png', shortcuts: ['mg'], continent: 'Africa' },
    { name: 'Mali', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Mali.svg/1280px-Flag_of_Mali.svg.png', shortcuts: ['ml'], continent: 'Africa' },
    { name: 'Mauretania', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Flag_of_Mauritania.svg/1280px-Flag_of_Mauritania.svg.png', shortcuts: ['mr'], continent: 'Africa' },
    { name: 'Niger', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flag_of_Niger.svg/1280px-Flag_of_Niger.svg.png', shortcuts: ['ne'], continent: 'Africa' },
    { name: 'Rwanda', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Rwanda.svg/1280px-Flag_of_Rwanda.svg.png', shortcuts: ['rw'], continent: 'Africa' },
    { name: 'Senegal', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/1280px-Flag_of_Senegal.svg.png', shortcuts: ['sn'], continent: 'Africa' },
    { name: 'Sierra Leone', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Sierra_Leone.svg/1280px-Flag_of_Sierra_Leone.svg.png', shortcuts: ['sl'], continent: 'Africa' },
    { name: 'Somalia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Somalia.svg/1280px-Flag_of_Somalia.svg.png', shortcuts: ['so'], continent: 'Africa' },
    { name: 'Tanzania', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tanzania.svg/1280px-Flag_of_Tanzania.svg.png', shortcuts: ['tz'], continent: 'Africa' },
    { name: 'Togo', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Flag_of_Togo.svg/1280px-Flag_of_Togo.svg.png', shortcuts: ['tg'], continent: 'Africa' },
    { name: 'Uganda', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/1280px-Flag_of_Uganda.svg.png', shortcuts: ['ug'], continent: 'Africa' },
    { name: 'Benin', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Benin.svg/1280px-Flag_of_Benin.svg.png', shortcuts: ['bj'], continent: 'Africa' },
    { name: 'Burkina Faso', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Burkina_Faso.svg/1280px-Flag_of_Burkina_Faso.svg.png', shortcuts: ['bf'], continent: 'Africa' },
    { name: 'Wyspy Zielonego Przylądka', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Cape_Verde.svg/1280px-Flag_of_Cape_Verde.svg.png', shortcuts: ['cv'], continent: 'Africa' },
    { name: 'Libia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Libya.svg', shortcuts: ['ly'], continent: 'Africa' },
    { name: 'Namibia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Namibia.svg/1280px-Flag_of_Namibia.svg.png', shortcuts: ['na'], continent: 'Africa' },
    { name: 'Sudan', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Sudan.svg/1280px-Flag_of_Sudan.svg.png', shortcuts: ['sd'], continent: 'Africa' },
    { name: 'Tunezja', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/1280px-Flag_of_Tunisia.svg.png', shortcuts: ['tn'], continent: 'Africa' },
    { name: 'Zambia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Zambia.svg/1280px-Flag_of_Zambia.svg.png', shortcuts: ['zm'], continent: 'Africa' },
    { name: 'Antigua i Barbuda', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Antigua_and_Barbuda.svg/1280px-Flag_of_Antigua_and_Barbuda.svg.png', shortcuts: ['ag'], continent: 'America' },
    { name: 'Bahamy', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_the_Bahamas.svg/1280px-Flag_of_the_Bahamas.svg.png', shortcuts: ['bs'], continent: 'America' },
    { name: 'Barbados', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Barbados.svg/1280px-Flag_of_Barbados.svg.png', shortcuts: ['bb'], continent: 'America' },
    { name: 'Belize', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Belize.svg/1280px-Flag_of_Belize.svg.png', shortcuts: ['bz'], continent: 'America' },
    { name: 'Kostaryka', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Costa_Rica_%28state%29.svg/1280px-Flag_of_Costa_Rica_%28state%29.svg.png', shortcuts: ['cr'], continent: 'America' },
    { name: 'Kuba', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/1280px-Flag_of_Cuba.svg.png', shortcuts: ['cu'], continent: 'America' },
    { name: 'Dominika', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Flag_of_Dominica.svg/1280px-Flag_of_Dominica.svg.png', shortcuts: ['dm'], continent: 'America' },
    { name: 'Dominikana', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/1280px-Flag_of_the_Dominican_Republic.svg.png', shortcuts: ['do'], continent: 'America' },
    { name: 'Salwador', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/1280px-Flag_of_El_Salvador.svg.png', shortcuts: ['sv'], continent: 'America' },
    { name: 'Gwatemala', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/1280px-Flag_of_Guatemala.svg.png', shortcuts: ['gt'], continent: 'America' },
    { name: 'Haiti', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Haiti.svg/1280px-Flag_of_Haiti.svg.png', shortcuts: ['ht'], continent: 'America' },
    { name: 'Jamajka', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/1280px-Flag_of_Jamaica.svg.png', shortcuts: ['jm'], continent: 'America' },
    { name: 'Saint Kitts and Nevis', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg/1280px-Flag_of_Saint_Kitts_and_Nevis.svg.png', shortcuts: ['kn'], continent: 'America' },
    { name: 'Saint Lucia', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Saint_Lucia.svg/1280px-Flag_of_Saint_Lucia.svg.png', shortcuts: ['lc'], continent: 'America' },
    { name: 'Saint Vincent and the Grenadines', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg/1280px-Flag_of_Saint_Vincent_and_the_Grenadines.svg.png', shortcuts: ['vc'], continent: 'America' },
    { name: 'Trynidad i Tobago', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Trinidad_and_Tobago.svg/1280px-Flag_of_Trinidad_and_Tobago.svg.png', shortcuts: ['tt'], continent: 'America' },
    { name: 'Kiribati', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kiribati.svg/1280px-Flag_of_Kiribati.svg.png', shortcuts: ['ki'], continent: 'Oceania' },
    { name: 'Honduras', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Honduras.svg/1280px-Flag_of_Honduras.svg.png', shortcuts: ['hn'], continent: 'America' },
    { name: 'Surinam', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_Suriname.svg/1280px-Flag_of_Suriname.svg.png', shortcuts: ['sr'], continent: 'America' },
    { name: 'Gujana', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_Guyana.svg/1920px-Flag_of_Guyana.svg.png', shortcuts: ['gy'], continent: 'America' },
    { name: 'Paragwaj', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/1280px-Flag_of_Paraguay.svg.png', shortcuts: ['py'], continent: 'America' },
    { name: 'Urugwaj', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/1280px-Flag_of_Uruguay.svg.png', shortcuts: ['uy'], continent: 'America' },
    { name: 'Lesotho', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Flag_of_Lesotho.svg/1280px-Flag_of_Lesotho.svg.png', shortcuts: ['ls'], continent: 'Africa' },
    { name: 'Eswatini', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Flag_of_Eswatini.svg/1024px-Flag_of_Eswatini.svg.png', shortcuts: ['sz'], continent: 'Africa' },
    { name: 'Wyspy Zielonego Przylądka', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Cape_Verde.svg/1280px-Flag_of_Cape_Verde.svg.png', shortcuts: ['cv'], continent: 'Africa' },
    { name: 'Seszele', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Seychelles.svg/1280px-Flag_of_Seychelles.svg.png', shortcuts: ['sc'], continent: 'Africa' },
    { name: 'Malediwy', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Maldives.svg/1280px-Flag_of_Maldives.svg.png', shortcuts: ['mv'], continent: 'Asia' },
    { name: 'Brunei Darussalam', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Brunei.svg/1280px-Flag_of_Brunei.svg.png', shortcuts: ['bn'], continent: 'Asia' },
    { name: 'Timor Wschodni', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_East_Timor.svg/1280px-Flag_of_East_Timor.svg.png', shortcuts: ['tl'], continent: 'Asia' },
    { name: 'Wyspy Marshalla', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flag_of_the_Marshall_Islands.svg/1280px-Flag_of_the_Marshall_Islands.svg.png', shortcuts: ['mh'], continent: 'Oceania' },
    { name: 'Wyspy Salomona', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_the_Solomon_Islands.svg/1280px-Flag_of_the_Solomon_Islands.svg.png', shortcuts: ['sb'], continent: 'Oceania' },
    { name: 'Tuvalu', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tuvalu.svg/1280px-Flag_of_Tuvalu.svg.png', shortcuts: ['tv'], continent: 'Oceania' },
    { name: 'Nauru', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Flag_of_Nauru.svg/1280px-Flag_of_Nauru.svg.png', shortcuts: ['nr'], continent: 'Oceania' },
    { name: 'Mikronezja', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg/1280px-Flag_of_the_Federated_States_of_Micronesia.svg.png', shortcuts: ['fm'], continent: 'Oceania' },
    { name: 'Wyspy Świętego Tomasza i Książęca', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg', shortcuts: ['st'], continent: 'Africa' },
    { name: 'Grenada', flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Grenada.svg/1280px-Flag_of_Grenada.svg.png', shortcuts: ['gd'], continent: 'America' },
];  

let countries = countriesEN;
let en = true;
let skipcn = 0;
let skipbtn = document.querySelector('#skip');
let flaginsettings = document.querySelector('#languageFlag');

function ChangeLanguage() {
    if (en === true) {
        countries = countriesPL;
        en = false;
        flaginsettings.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1200px-Flag_of_Poland.svg.png';
        displayCurrentCountry();
    } else if (en === false) {
        countries = countriesEN;
        en = true;
        flaginsettings.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png';
        displayCurrentCountry();
    }
}

const continents = ['Europe', 'Asia', 'Africa', 'America', 'Oceania'];

let currentCountryIndex = getRandomCountry();
let failscore = 0;
let points = 0;
 
function EuropeFilter() {
    filterContinent('Europe');
}

function AsiaFilter() {
    filterContinent('Asia');
}

function AfricaFilter() {
    filterContinent('Africa');
}

function AmericaFilter() {
    filterContinent('America');
}

function OceaniaFilter() {
    filterContinent('Oceania');
}

function filterContinent(continent) {
    const checkbox = document.getElementById(`${continent}Checkbox`);
    const isChecked = checkbox.checked;

    if (isChecked) {
        continents.push(continent);
    } else {
        const index = continents.indexOf(continent);
        if (index !== -1 && continents.length > 1) {
            continents.splice(index, 1);
        } else {
            checkbox.checked = true;
        }
    }

    currentCountryIndex = getRandomCountry();
    displayCurrentCountry();
}

function getRandomCountry() {
    let filteredCountries = countries.filter(country => continents.includes(country.continent));
    let randomIndex = Math.floor(Math.random() * filteredCountries.length);
    console.log(continents)
    return countries.indexOf(filteredCountries[randomIndex]);
}

function displayCurrentCountry() {
    const flagImage = document.getElementById('flagImage');
    flagImage.src = countries[currentCountryIndex].flagURL;
}

const shortcutsMap = {};
countries.forEach(country => {
    country.shortcuts.forEach(shortcut => {
        shortcutsMap[shortcut.toLowerCase()] = country.name.toLowerCase();
    });
});

function checkCountry() {
    const userInput = document.getElementById('countryInput');
    const resultParagraph = document.getElementById('result');
    const pointsSpan = document.getElementById('points');
    const failsSpan = document.getElementById('failscore')

    const guessedCountry = userInput.value.trim().toLowerCase();

    if (userInput.value.trim() !== '') {
        const correctCountry = countries[currentCountryIndex].name.toLowerCase();
        const correctShortcut = countries[currentCountryIndex].shortcuts.map(shortcut => shortcut.toLowerCase());

        if (correctCountry === guessedCountry || correctShortcut.includes(guessedCountry)) {
            resultParagraph.textContent = `Correct! +10 points for ${countries[currentCountryIndex].name}!`;
            points += 10;
            pointsSpan.textContent = points;

            skipcn = 0;
            currentCountryIndex = getRandomCountry();
            displayCurrentCountry();

            userInput.value = '';
        } else {
            resultParagraph.textContent = 'Incorrect! Try again.';
            
            if (skipcn <= 2) {
                skipcn += 1;
            } else {
                skipbtn.style.display = 'block';
            }

            failscore += 1;
            failsSpan.textContent = failscore;
            if (points >= 5) {
                points -= 5;
                pointsSpan.textContent = points;
            }
        }
    } else {
        resultParagraph.textContent = 'Please enter a country name.';
    }
}

document.getElementById('countryInput').addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        checkCountry();
    }
});

function skip(){
    skipcn=0
    skipbtn.style.display = 'none';
    currentCountryIndex = getRandomCountry();
    displayCurrentCountry();
}

let clicked = false;

function settings(){
    const div = document.getElementById("animatedDiv");

    if (!clicked) {
      div.style.right = "5px";
    } else {
      div.style.right = "-300px";
    };
    clicked = !clicked;
};

displayCurrentCountry()

//tester

/*
const testerDiv = document.querySelector('.tester');
    function createFlag(flagURL) {
        const flag = document.createElement('img');
        flag.src = flagURL;
        flag.className = 'flag';
        return flag;
    }

function appendFlagsWithDelay() {
    countries.forEach((country, index) => {
        setTimeout(() => {
            const flagElement = createFlag(country.flagURL);
            testerDiv.appendChild(flagElement);
        }, index * 100);
    });
}
setTimeout(appendFlagsWithDelay, 1000);
*/