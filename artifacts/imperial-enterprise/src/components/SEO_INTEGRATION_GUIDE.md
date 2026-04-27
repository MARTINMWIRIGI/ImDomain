# SEO Integration Guide — Exact Code Changes
# =============================================
# For: imperialenterprise.co.ke (ImDomain repo)
# All files are in: artifacts/imperial-enterprise/src/pages/

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# STEP 1: Make sure SEOHead.tsx is at:
#   src/components/SEOHead.tsx
# (You should have uploaded this already)
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# STEP 2: Edit each page file
# For each file below, add 2 things:
#   1. Import line (at the very top)
#   2. <SEOHead> component (right after "return (")
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## home.tsx
## --------
## ADD this import at line 1 (before other imports):
import { SEOHead, SEO_CONFIG } from "@/components/SEOHead";

## FIND this line (around line 17):
  return (

## ADD right after it (inside the return):
      <SEOHead {...SEO_CONFIG.home} />


## services.tsx
## ------------
## ADD this import at line 1:
import { SEOHead, SEO_CONFIG } from "@/components/SEOHead";

## FIND the return statement in the Services function:
  return (

## ADD right after it:
      <SEOHead {...SEO_CONFIG.services} />


## hosting.tsx
## -----------
## FIRST: Add a default export function wrapper. Currently hosting.tsx
## doesn't show an export function. Find the return statement and add:
import { SEOHead, SEO_CONFIG } from "@/components/SEOHead";

## ADD right after the return (:
      <SEOHead {...SEO_CONFIG.hosting} />


## domains.tsx
## -----------
import { SEOHead, SEO_CONFIG } from "@/components/SEOHead";

## ADD right after the return (:
      <SEOHead {...SEO_CONFIG.domains} />


## about.tsx
## ---------
import { SEOHead, SEO_CONFIG } from "@/components/SEOHead";

## ADD right after "return (" (around line 28):
      <SEOHead {...SEO_CONFIG.about} />


## contact.tsx
## -----------
import { SEOHead, SEO_CONFIG } from "@/components/SEOHead";

## ADD right after "return (" (around line 23):
      <SEOHead {...SEO_CONFIG.contact} />


## portfolio.tsx
## -------------
import { SEOHead, SEO_CONFIG } from "@/components/SEOHead";

## ADD right after "return (" :
      <SEOHead {...SEO_CONFIG.portfolio} />
