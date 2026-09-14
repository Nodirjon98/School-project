import json
import re

raw_input = """
first_name
last_name
birth_date
phone
status
payment_type
custom_fee
login_email
target_level
Shahzoda
Ilhomova
2014-04-20
+998884869293
active
full
Shahnoza
Kodirova
2013-08-30
active
full
O'lmas
Rasulov
+998973035125
active
full
350
To'ymurod
Azimov
888660110
active
full
Azizbek
Ashurov
2015-10-14
978622242
active
full
Dilnoza
Rajabova
2014-04-04
976642888
active
custom
Mirshod
Xolmurodov
2026-10-19
873379316
active
custom
Manzura
Sayfullayeva
2011-08-18
880827771
active
custom
400000
manzura.sayfullayeva@premier.uz
Akbar
Ashurov
2012-09-07
880712524
active
full
Shalola
Hasanova
2013-09-27
+998970806408
active
full
shalola.hasanova@premier.uz
Sadoqatbonu
Salimova
2006-06-20
+998978612006
active
free
sadoqatbonu.salimova@premier.uz
Mehroj
Ulug'bekov
880829911
active
custom
300000
Muhammad
Elmurodov
2012-07-15
+998880175400
active
full
muhammad.elmurodov@premier.uz
Muhammadali
Rajabov
2018-11-09
912420207
left
custom
250000
Otabek
Ro'ziqulov
2011-08-06
977987914
active
custom
600000
otabek.roziqulov@premier.uz
Sarvar
Rasulov
2016-05-19
870531716
active
full
sarvar.rasulov@premier.uz
Zuhra
Aminova
2012-06-09
978541611
active
full
zuhra.aminova@premier.uz
Parviz
Shokirov
2013-04-25
+998901949096
active
full
parviz.shokirov@premier.uz
Shaxram
Shokirov
2018-03-18
active
full
shaxram.shokirov@premier.uz
Aziza
Hafizova
2009-12-11
876841191
active
full
aziza.hafizova@premier.uz
Bobur
Yangiboyev
2011-12-12
973094456
active
full
bobur.yangiboyev@premier.uz
Fotima
Aminova
2012-06-09
978541611
active
full
fotima.zuhra49@premier.uz
Farhod
Muhammadov
active
full
farhod.premier@premier.uz
Jasurbek
Joniyev
left
full
Sarvinoz
Joniyeva
left
full
Parizoda
Tangriyeva
+998972810040
left
full
parizoda.tangriyeva@premier.uz
Mehroj
Tangriyev
+998949948810
left
full
G'olibjon
Umarov
2015-07-25
+998888686575
active
full
golibjon.umarov@premier.uz
A2
Zarina
Ostonova
2013-05-02
+998971811007
active
full
zarina.ostonova@premier.uz
Parizoda
Nematova
2014-04-05
+998936838980
active
full
parizoda.nematova@premier.uz
Mehrangiz
Baxodirova
2016-01-08
+998883093366
active
full
mehrangiz.baxodirova@premier.uz
IELTS
Sarvinozbonu
Salimova
2013-10-18
+998918280312
left
full
sarvinozbonu.salimova@premier.uz
Ferangiz
Ramazonova
2013-05-31
+998946763086
active
full
ferangiz.ramazonova@premier.uz
Charos
Farmonova
2012-12-29
+998931105479
active
full
charos.farmonova@premier.uz
Fotima
Ergasheva
2013-08-25
+998912420955
left
full
fotima.ergasheva@premier.uz
Alijon
Umarov
2011-09-22
active
full
alijon.umarov@premier.uz
"""

lines = [l.strip() for l in raw_input.strip().split('\n') if l.strip()]
header_names = {'first_name', 'last_name', 'birth_date', 'phone', 'status', 'payment_type', 'custom_fee', 'login_email', 'target_level'}
tokens = [l for l in lines if l not in header_names]

def is_date(s):
    return bool(re.match(r'^\d{4}-\d{2}-\d{2}$', s))

def is_phone(s):
    cleaned = re.sub(r'[^\d+]', '', s)
    return (cleaned.startswith('+998') and len(cleaned) >= 12) or (len(cleaned) == 9 and cleaned.isdigit())

def is_status(s):
    return s.lower() in ('active', 'left')

def is_payment_type(s):
    return s.lower() in ('full', 'custom', 'free')

def is_email(s):
    return '@' in s

def is_target_level(s):
    return s.upper() in ('A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'IELTS')

def is_fee(s):
    return s.isdigit()

students = []
i = 0
while i < len(tokens):
    first_name = tokens[i]
    last_name = tokens[i+1]
    i += 2
    
    birth_date = None
    phone = None
    status = 'active'
    payment_type = 'full'
    custom_fee = None
    login_email = None
    target_level = 'B1'

    while i < len(tokens):
        tok = tokens[i]
        if is_date(tok):
            birth_date = tok
            i += 1
        elif is_phone(tok):
            phone = tok
            i += 1
        elif is_status(tok):
            status = tok.lower()
            i += 1
        elif is_payment_type(tok):
            payment_type = tok.lower()
            i += 1
        elif is_email(tok):
            login_email = tok.lower()
            i += 1
        elif is_target_level(tok):
            target_level = tok.upper()
            i += 1
        elif is_fee(tok):
            val = int(tok)
            if val < 1000:
                val = val * 1000
            custom_fee = val
            i += 1
        else:
            break

    formatted_phone = phone or ""
    if phone:
        digits = re.sub(r'[^\d]', '', phone)
        if len(digits) == 9:
            digits = '998' + digits
        if len(digits) == 12:
            formatted_phone = f"+{digits[0:3]} {digits[3:5]} {digits[5:8]} {digits[8:10]} {digits[10:12]}"

    clean_first = re.sub(r"[^a-zA-Z]", "", first_name.lower().replace("'", "").replace("‘", "").replace("’", ""))
    clean_last = re.sub(r"[^a-zA-Z]", "", last_name.lower().replace("'", "").replace("‘", "").replace("’", ""))
    if not login_email:
        login_email = f"{clean_first}.{clean_last}@premier.uz"

    clean_name_cap = clean_first.capitalize()
    password = f"{clean_name_cap}2026!"

    cefr = 'B2' if target_level == 'IELTS' else target_level if target_level in ('A1', 'A2', 'B1', 'B2', 'C1') else 'B1'

    students.append({
        "id": f"student-official-{len(students)+1}",
        "email": login_email,
        "full_name": f"{first_name} {last_name}",
        "role": "student",
        "phone": formatted_phone,
        "birth_date": birth_date,
        "status": status,
        "payment_type": payment_type,
        "custom_fee": custom_fee,
        "password": password,
        "level": cefr,
        "onboarding_completed": True,
        "xp": 350 if status == 'active' else 50,
        "streak": 3 if status == 'active' else 0,
        "payment_status": "paid" if payment_type == "free" else "pending",
        "created_at": "2026-02-01T09:00:00Z"
    })

# Output file
ts_code = """import { Profile } from '../types';

export const PREMIER_OFFICIAL_STUDENTS: Profile[] = """ + json.dumps(students, indent=2, ensure_ascii=False) + """;
"""

with open("src/data/premierStudentsData.ts", "w", encoding="utf-8") as f:
    f.write(ts_code)

print("Generated src/data/premierStudentsData.ts with", len(students), "students!")
