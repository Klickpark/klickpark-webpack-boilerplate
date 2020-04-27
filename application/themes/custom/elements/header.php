<?php
defined('C5_EXECUTE') or die("Access Denied.");
$u = new User();
?>

<!DOCTYPE html>
<html lang="<?=Localization::activeLocale()?>" class="<?php if ($c->isEditMode()) { echo 'ccm-edit-mode'; }?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="Klickpark GmbH & Co. KG">

    <?php Loader::element('header_required', array('pageTitle' => $pageTitle));?>

    <!-- Open Graph -->
    <?php
        $ogtitle = $c->getAttribute('meta_title');
        $ogdescription = $c->getAttribute('meta_description');
    ?>
    <meta property="og:type" content="website" />
    <meta property="og:title" content="<?php echo htmlspecialchars($ogtitle, ENT_COMPAT, APP_CHARSET); ?>" />
    <meta property="og:image" content="" />
    <meta property="og:description" content="<?php echo htmlspecialchars($ogdescription, ENT_COMPAT, APP_CHARSET); ?>" />
    <meta property="og:site_name" content="Cervis" />

    <!-- <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@iah" />
    <meta name="twitter:creator" content="@iah" />
    <meta name="twitter:domain" content="infusionathome.eu" />
    <meta name="twitter:image" content="" /> -->
    <!-- /Open Graph -->

    <!-- Load CSS -->
    <link href="<?=$this->getThemePath()?>/style.css?version=1.0.0" rel="stylesheet" text="text/css">
    <!-- /Load CSS -->
</head>
<body>

    <div class="site <?=$c->getPageWrapperClass()?> <?='page-'.strtolower(preg_replace('/\PL/u','',$c->getCollectionName()))?>">

        <div class="main">

            <div class="header" <?php if ($c->isEditMode() || ($u->isLoggedIn() || $u->isSuperUser())) { echo 'style="top:47px;"'; } ?>>

                Header.

                <?php if (Localization::activeLocale() == 'de_DE') { ?>
                <?php } else { ?>
                <?php } ?>

            </div><!-- ./header -->
