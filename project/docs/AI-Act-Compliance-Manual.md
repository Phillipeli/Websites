# EU AI Act Compliance Manual - Leadstrøm

**Udarbejdet:** Januar 2025  
**Virksomhed:** Leadstrøm  
**Kontakt:** hej@leadstrom.dk  
**Version:** 1.0

---

## 📋 **Executive Summary**

Denne compliance-manual er udarbejdet specifikt til Leadstrøm's AI-tjenester under EU's AI Act. Som enkeltmandsvirksomhed der leverer AI chatbots til B2B kunder, falder dine services primært under **"Begrænset Risiko"** kategorien, men visse funktioner kan potentielt klassificeres som **"Høj Risiko"**.

**Kritiske deadlines:**
- **August 2025:** General-purpose AI models (GPAIs)
- **August 2026:** Høj-risiko AI systemer
- **August 2027:** Alle øvrige bestemmelser

---

## 🎯 **1. Risikovurdering af Leadstrøm's AI-systemer**

### **1.1 Nuværende AI-systemer identificeret:**

#### **A) AI Chatbots (Voiceflow-baseret)**
- **Formål:** Kundeservice, booking, lead-kvalificering
- **Risikoklassificering:** **BEGRÆNSET RISIKO** (primært)
- **Potentiel høj risiko:** Hvis chatbot træffer automatiske beslutninger om:
  - Kreditvurdering eller finansielle services
  - Ansættelsesprocesser
  - Uddannelsesadgang

#### **B) Lead-kvalificering AI**
- **Formål:** Automatisk vurdering og prioritering af potentielle kunder
- **Risikoklassificering:** **POTENTIEL HØJ RISIKO**
- **Begrundelse:** Kan påvirke personers adgang til services eller muligheder

#### **C) Tredjepartsintegrationer**
- **Voiceflow:** AI chatbot platform
- **OpenAI/GPT:** Underliggende sprogmodel
- **Google Analytics:** Ikke AI under AI Act
- **Facebook Pixel:** Ikke AI under AI Act

### **1.2 Risikoklassificering efter AI Act:**

| AI System | Risiko Niveau | AI Act Artikel | Compliance Krav |
|-----------|---------------|----------------|-----------------|
| Kundeservice Chatbot | Begrænset Risiko | Art. 50 | Transparens-krav |
| Booking System AI | Minimal Risiko | Art. 6 | Grundlæggende krav |
| Lead-kvalificering | **Høj Risiko** | Art. 6-51 | Fuld compliance |
| Voiceflow Platform | Afhænger af brug | Art. 28 | Leverandør-ansvar |

---

## 📅 **2. Implementeringsplan med Tidsfrister**

### **Fase 1: Øjeblikkelige handlinger (Januar-Marts 2025)**

#### **Handling 1.1: Systemaudit og dokumentation**
- **Deadline:** 15. februar 2025
- **Ansvarlig:** Dig (Phillip)
- **Opgaver:**
  - [ ] Komplet inventar af alle AI-systemer
  - [ ] Dokumenter hver AI's formål og funktionalitet
  - [ ] Identificer alle datakilder og -behandling
  - [ ] Map kundeinteraktioner og beslutningsprocesser

#### **Handling 1.2: Leverandør-compliance verificering**
- **Deadline:** 28. februar 2025
- **Ansvarlig:** Dig
- **Opgaver:**
  - [ ] Kontakt Voiceflow om deres AI Act compliance
  - [ ] Verificer OpenAI's compliance-status
  - [ ] Indhent compliance-dokumentation fra alle AI-leverandører
  - [ ] Opdater leverandøraftaler med AI Act-klausuler

#### **Handling 1.3: Juridisk rådgivning**
- **Deadline:** 15. marts 2025
- **Ansvarlig:** Dig
- **Budget:** 15.000-25.000 DKK
- **Opgaver:**
  - [ ] Konsulter AI Act-specialist advokat
  - [ ] Få juridisk vurdering af lead-kvalificering system
  - [ ] Opdater kundekontrakter med AI Act-klausuler

### **Fase 2: Compliance-implementering (April-Juli 2025)**

#### **Handling 2.1: Transparens-implementering**
- **Deadline:** 30. april 2025
- **Ansvarlig:** Dig
- **Opgaver:**
  - [ ] Implementer AI-disclosure på hjemmeside
  - [ ] Opdater privatlivspolitik med AI-behandling
  - [ ] Opret "AI Transparency" side på hjemmeside
  - [ ] Informer kunder om AI-brug i services

#### **Handling 2.2: Dokumentationssystem**
- **Deadline:** 31. maj 2025
- **Ansvarlig:** Dig
- **Opgaver:**
  - [ ] Implementer AI-logging system
  - [ ] Opret risikovurderingsdokumentation
  - [ ] Etabler incident-rapportering procedure
  - [ ] Dokumenter AI-træningsdata og -metoder

### **Fase 3: Høj-risiko compliance (August 2025-Juli 2026)**

#### **Handling 3.1: Lead-kvalificering system compliance**
- **Deadline:** 1. august 2026
- **Ansvarlig:** Dig
- **Budget:** 50.000-100.000 DKK
- **Opgaver:**
  - [ ] Implementer menneskeligt oversight
  - [ ] Opret audit-trail for alle AI-beslutninger
  - [ ] Etabler bias-testing og -monitorering
  - [ ] Implementer "right to explanation" funktionalitet

---

## 📚 **3. Dokumentationskrav**

### **3.1 Obligatoriske dokumenter:**

#### **A) AI System Documentation (Art. 11)**
```
Dokument: AI_System_Documentation_[SystemNavn].pdf
Indhold:
- Systemets formål og funktionalitet
- Tekniske specifikationer
- Træningsdata beskrivelse
- Performance metrics
- Risiko-mitigering strategier
- Menneskeligt oversight procedurer
```

#### **B) Risk Assessment Documentation (Art. 9)**
```
Dokument: Risk_Assessment_[SystemNavn].pdf
Indhold:
- Identificerede risici
- Sandsynlighed og impact vurdering
- Mitigering strategier
- Monitorering procedurer
- Review og opdatering plan
```

#### **C) Data Governance Documentation (Art. 10)**
```
Dokument: Data_Governance_Policy.pdf
Indhold:
- Datakilder og -kvalitet
- Bias detection og prevention
- Data minimering principper
- Retention og deletion policies
- Privacy impact assessments
```

### **3.2 Logging og sporbarhed (Art. 12)**

#### **Implementer automatisk logging af:**
- Alle AI-beslutninger og -anbefalinger
- Input data og output resultater
- Brugerinteraktioner med AI-systemer
- System performance og fejl
- Menneskeligt oversight aktiviteter

#### **Logging retention:**
- **Høj-risiko systemer:** Minimum 6 måneder
- **Begrænset risiko:** Minimum 3 måneder
- **Kritiske beslutninger:** Op til 2 år

---

## 🏢 **4. Governance-struktur**

### **4.1 Roller og ansvar (Enkeltmandsvirksomhed)**

#### **AI Compliance Officer (Dig - Phillip)**
- **Ansvar:**
  - Overordnet AI Act compliance
  - Leverandør-forhold og -overvågning
  - Kundekontrakter og -kommunikation
  - Incident-håndtering
  - Dokumentation og rapportering

#### **Teknisk AI Ansvarlig (Dig - Phillip)**
- **Ansvar:**
  - AI-system implementering og vedligeholdelse
  - Teknisk dokumentation
  - Performance monitorering
  - Bias testing og -korrektion
  - Sikkerhed og data protection

#### **Ekstern juridisk rådgiver**
- **Ansvar:**
  - Juridisk compliance-rådgivning
  - Kontraktgennemgang
  - Regulatorisk opdateringer
  - Incident-respons support

### **4.2 Beslutningsprocesser**

#### **AI System Deployment Process:**
1. **Pre-deployment risk assessment**
2. **Compliance check mod AI Act krav**
3. **Dokumentation completion**
4. **Stakeholder approval** (dig + juridisk rådgiver)
5. **Deployment med monitoring**
6. **Post-deployment review**

#### **Incident Response Process:**
1. **Incident detection og classification**
2. **Øjeblikkelig containment**
3. **Impact assessment**
4. **Stakeholder notification**
5. **Remediation planning og execution**
6. **Post-incident review og learning**

---

## 🔄 **5. Løbende overholdelse**

### **5.1 Monitorering og evaluering**

#### **Månedlige aktiviteter:**
- [ ] Review AI system performance metrics
- [ ] Check for bias i AI-beslutninger
- [ ] Verificer logging og dokumentation
- [ ] Leverandør compliance status check

#### **Kvartalsvise aktiviteter:**
- [ ] Komplet risk assessment review
- [ ] Kunde feedback analyse
- [ ] Compliance dokumentation audit
- [ ] Juridisk rådgiver konsultation

#### **Årlige aktiviteter:**
- [ ] Fuld AI Act compliance audit
- [ ] Leverandøraftaler genforhandling
- [ ] Staff training og awareness (når relevant)
- [ ] Compliance strategi opdatering

### **5.2 Opdateringsprocesser**

#### **Regulatoriske opdateringer:**
- **Kilde:** EU AI Office, nationale myndigheder
- **Frekvens:** Månedlig monitoring
- **Proces:** Review → Impact assessment → Implementation plan

#### **Teknologiske opdateringer:**
- **AI model updates:** Compliance re-assessment påkrævet
- **Platform changes:** Dokumentation opdatering
- **New features:** Risk assessment før deployment

### **5.3 Incident-håndtering**

#### **Incident kategorier:**
1. **Kategori 1 - Kritisk:** AI-fejl med betydelig bruger-impact
2. **Kategori 2 - Høj:** Compliance-overtrædelse
3. **Kategori 3 - Medium:** Performance-degradering
4. **Kategori 4 - Lav:** Mindre dokumentations-fejl

#### **Response tider:**
- **Kategori 1:** 2 timer
- **Kategori 2:** 24 timer
- **Kategori 3:** 72 timer
- **Kategori 4:** 1 uge

---

## 💰 **6. Budget og ressourcer**

### **6.1 Estimerede compliance-omkostninger:**

#### **Engangsomkostninger (2025-2026):**
- **Juridisk rådgivning:** 50.000-75.000 DKK
- **Compliance software/tools:** 25.000-40.000 DKK
- **Dokumentation og processer:** 15.000-25.000 DKK
- **System upgrades:** 30.000-50.000 DKK
- ****Total:** 120.000-190.000 DKK**

#### **Årlige driftsomkostninger:**
- **Juridisk support:** 25.000-35.000 DKK
- **Compliance monitoring tools:** 15.000-25.000 DKK
- **Audit og certificering:** 10.000-20.000 DKK
- ****Total årligt:** 50.000-80.000 DKK**

### **6.2 ROI og business case:**

#### **Compliance benefits:**
- **Markedsadgang:** Fortsatte EU-operationer
- **Konkurrencefordel:** Certificeret AI Act compliance
- **Risikoreduktion:** Undgå bøder op til €35M eller 7% af omsætning
- **Kundetillid:** Øget tillid gennem transparens

---

## 🚨 **7. Kritiske handlinger - Øjeblikkelig opmærksomhed**

### **Højeste prioritet (Næste 30 dage):**

1. **Kontakt Voiceflow** om deres AI Act compliance roadmap
2. **Juridisk konsultation** for lead-kvalificering system klassificering
3. **Opdater kundekontrakter** med AI Act-klausuler
4. **Implementer AI transparency** på hjemmeside

### **Medium prioritet (Næste 90 dage):**

1. **Etabler logging system** for alle AI-interaktioner
2. **Dokumenter alle AI-systemer** komplet
3. **Opret incident response** procedurer
4. **Verificer alle leverandører** compliance status

---

## 📞 **8. Kontakt og support**

### **Anbefalede AI Act specialister:**
- Søg efter AI Act specialister i Danmark
- Kontakt danske advokatfirmaer med tech-ekspertise
- Overvej internationale AI Act konsulenter

### **Compliance monitoring tools:**
- **OneTrust AI Governance**
- **DataSnipper AI Compliance**
- **Custom logging solution** (anbefalet for din størrelse)

---

## ✅ **9. Compliance checklist**

### **Øjeblikkelige handlinger:**
- [ ] Læs denne manual komplet
- [ ] Book juridisk konsultation
- [ ] Kontakt Voiceflow om compliance
- [ ] Opdater hjemmeside med AI transparency
- [ ] Implementer basis logging

### **30-dages mål:**
- [ ] Komplet AI system audit
- [ ] Leverandør compliance verificering
- [ ] Opdaterede kundekontrakter
- [ ] Basis dokumentation på plads

### **90-dages mål:**
- [ ] Fuld compliance dokumentation
- [ ] Implementeret monitoring system
- [ ] Etableret governance processer
- [ ] Klar til August 2025 deadline

---

**Denne manual skal reviewes og opdateres kvartalsvis eller ved væsentlige ændringer i AI Act-regulering.**

**Næste review dato:** 1. april 2025